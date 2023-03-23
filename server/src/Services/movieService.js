import ErrorHandler from './error.js'
import Movies from '../models/Movie.js'

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
}
