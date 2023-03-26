import Rating from '../models/Rating.js'

export default class RatingService {
  getRating = async (id) => {
    try {
      return await Rating.findOne({ userId: id })
    } catch (error) {
      console.log(error)
      throw new Error('something went wrong')
    }
  }

  getAllRating = async () => {
    try {
      return await Rating.find()
    } catch (error) {
      console.log(error)
      throw new Error('something went wrong')
    }
  }
}
