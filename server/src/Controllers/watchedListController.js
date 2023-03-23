import WatchedList from '../models/watchedList.js'

export default class WatchedListController {
  addWatchList = async (req, res, next) => {
    const { uid, movieId } = req.body
    try {
      const oldList = await WatchedList.find({ uid: uid })
      let result

      if (oldList.length > 0) {
        let list = oldList[0].watchedList
        if (list.includes(movieId)) {
          res.status(400).json({ message: 'bad request' })
          return
        }
        list.push(movieId)
        result = await WatchedList.findOneAndUpdate(
          { uid: uid },
          { watchedList: list }
        )
      } else {
        const watchedList = new WatchedList({
          uid: uid,
          watchedList: [movieId]
        })
        result = await watchedList.save()
      }
      res.status(200).json(result)
    } catch (error) {
      console.log(error)
      next()
    }
  }
}
