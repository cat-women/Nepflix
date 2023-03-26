import Movies from '../models/Movie.js'
import MovieService from '../Services/movieService.js'

const movieService = new MovieService()

export default class MovieController {
  getAllGenre = async (req, res, next) => {
    try {
      const results = await movieService.getAllGenre()
      if (!results) return res.status(404).json({ msg: 'No Genre' })

      return res.status(200).json(results)
    } catch (error) {
      next()
    }
  }

  getGenre = async (req, res, next) => {
    try {
      const genre = req.params.genre
      console.log(genre)
      const results = await Movies.find({
        Genre: {
          $regex: `/${genre}\s*[, ]|[, ]\s*${genre}|${genre}$|^${genre}|[, ]\s*${genre},${genre}\s*[,]/`,
          $options: 'i'
        }
      })

      if (!results) return res.status(404).json({ msg: 'No Genre' })

      return res.status(200).json(results)
    } catch (error) {
      console.log(error)
      next()
    }
  }

  getAllMovie = async (req, res, next) => {
    try {
      const movies = await movieService.getAllMovie()
      if (movies.length === 0 || !movies)
        res.status(404).json({ message: 'No movies found' })
      res.status(200).json(movies)
    } catch (error) {
      next()
    }
  }

  getRecommendation = async (req, res, next) => {
    try {
      const recommendedMovies = await movieService.getRecommendation(
        req.params.id
      )
      console.log('final result', recommendedMovies)
      if (!recommendedMovies) {
        res.status(404).json({ message: 'No recommendation for you ' })
        return
      }
      res.status(200).json(recommendedMovies)
    } catch (error) {
      console.log(error)
      next()
    }
  }
}
