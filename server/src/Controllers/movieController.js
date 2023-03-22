import Movies from '../models/Movie.js'

export default class MovieController {
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

      if (!results) return res.status(404).json({ msg: 'No Genre' })

      return res.status(200).json(results)
    } catch (error) {
      console.log(error)
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
  
}
