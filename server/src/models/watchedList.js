import mongoose from 'mongoose'

const objectId = mongoose.Schema.Types.ObjectId

const watchedListSchema = mongoose.Schema({
  uid: {
    type: objectId,
    required: true,
    unique: true,
    ref: 'users'
  },
  watchedList: {
    type: [String],
    default: []
  }
})

export default mongoose.model('WatchedList', watchedListSchema)
