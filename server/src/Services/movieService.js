import mongoose from 'mongoose'
import ErrorHandler from './error.js'
import Movies from '../models/Movie.js'
import Rating from '../models/Rating.js'
import WatchedList from '../models/watchedList.js'
import RatingService from './ratingService.js'

const objectId = mongoose.Types.ObjectId

export default class MovieService {
  getAllGenre = async (req, res, next) => {
    try {
      const results = await Movies.aggregate([
        { $match: { Genre: { $exists: true } } },
        {
          $project: {
            genreWords: {
              $split: [
                {
                  $replaceAll: { input: '$Genre', find: ',', replacement: '' }
                },
                ' '
              ]
            }
          }
        },
        { $unwind: '$genreWords' },
        {
          $group: {
            _id: '$genreWords',
            count: { $sum: 1 }
          }
        },
        { $sort: { count: -1 } }
      ])

      return results
    } catch (error) {
      console.log(error)
      throw new Error('someting went wrong')
    }
  }

  getAllMovie = async (req, res, next) => {
    try {
      const movies = await Movies.find({}, { Series_Title: 1, _id: 1 })
      return movies
    } catch (error) {
      console.log(error)
      throw new Error('something went wrong')
    }
  }

  getRecommendation = async currentUserId => {
    const ratingService = new RatingService()
    try {
      const targetUserRating = await ratingService.getRating(currentUserId)
      const allRating = await ratingService.getAllRating()

      // get current user watched list
      const currentUserWatchedList = await WatchedList.findOne(
        { uid: objectId(currentUserId) },
        { watchedList: 1, _id: 0 }
      ).exec()

      console.log(
        'cureent user watchedlist ',
        currentUserWatchedList.watchedList
      )

      // calculate similarity
      let similarUsers = {}

      // get movie that current user not watched but other similar user has
      let recommendedMovies = {}
      for (const user of allRating) {
        let similarity = calSimilarity(
          targetUserRating.genreRatings,
          user.genreRatings
        )

        console.log('similarity', similarity)

        const moviesNotWatched = await getMoviesOnlyWatchedBySecond(
          currentUserWatchedList.watchedList,
          user.userId
        )

        for (let i = 0; i < moviesNotWatched.length; i++) {
          const movie = moviesNotWatched[i]
          const originalRating = await this.getOriginalRating(movie)

          console.log('movies id', movie, 'rating', originalRating.IMDB_Rating)

          const weight = parseFloat(originalRating.IMDB_Rating) + similarity
          console.log(
            'weight ',
            weight,
            'recommendedMovies ',
            recommendedMovies
          )
          if (!recommendedMovies.hasOwnProperty(movie)) {
            recommendedMovies[movie] = weight
          } else recommendedMovies[movie] += weight
        }
      }
      const movies = Object.entries(recommendedMovies).sort(
        (a, b) => b[1] - a[1]
      )


      return movies
    } catch (error) {
      console.log(error)
      throw new Error('Somethings went wrong')
    }
  }

  getOriginalRating = async id => {
    return await Movies.findById(id)
  }
}

function getRating (objects) {
  let rating = []
  objects.forEach((key, value) => {
    rating.push(value)
  })
  return rating
}

function calSimilarity (user1, user2) {
  let a = getRating(Object.values(user1))

  let b = getRating(Object.values(user2))

  const dotProduct = a.reduce(
    (sum, element, index) => sum + element * b[index],
    0
  )
  const aMagnitude = Math.sqrt(
    a.reduce((sum, element) => sum + Math.sqrt(element), 0)
  )
  const bMagnitude = Math.sqrt(
    b.reduce((sum, element) => sum + Math.sqrt(element), 0)
  )
  const cosineSimilarity = dotProduct / (aMagnitude * bMagnitude)

  return Math.round(cosineSimilarity * 100) / 100
}

async function getMoviesOnlyWatchedBySecond (firstUserMovie, secondUser) {
  try {
    const secondUserMovie = await WatchedList.findOne(
      { uid: secondUser },
      { watchedList: 1, _id: 0 }
    ).exec()
    if (!secondUserMovie) return []
    const movies = secondUserMovie.watchedList.filter(
      movieId => !firstUserMovie.includes(movieId)
    )

    return movies
  } catch (error) {
    console.log(error)
  }
}
