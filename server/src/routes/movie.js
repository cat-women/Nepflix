import express from 'express'
import MovieController from '../Controllers/movieController.js'

const controller = new MovieController()

const router = express.Router()

router.get('/genre/:genre', controller.getGenre)
router.get('/allGenre', controller.getAllGenre)

export default router
