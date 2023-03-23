import express from 'express'
import MovieController from '../Controllers/movieController.js'

const movie = new MovieController()

const router = express.Router()

router.get('/genre/:genre', movie.getGenre)
router.get('/allGenre', movie.getAllGenre)
router.get('/', movie.getAllMovie)


export default router
