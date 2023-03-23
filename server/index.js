import express from 'express'
import bodyParser from 'body-parser'
import mongoose from 'mongoose'
import cors from 'cors'
import dotenv from 'dotenv'

import ErrorHandler from './src/middlerware/errorHandler.js'
import Movie from './src/routes/movie.js'
import User from './src/routes/user.js'
import Rating from './src/routes/rating.js'

const app = express()
dotenv.config()

const PORT = process.env.PORT || 8000

app.use(bodyParser.json({ limit: '30mb', extended: true }))
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }))
app.use(cors())

mongoose
  .connect(process.env.CONNECTION_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() =>
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`))
  )
  .catch(err => console.log(err.message))

// erro handler
app.use(ErrorHandler)

// routes
app.use('/movie', Movie)
app.use('/user', User)
app.use('/rating', Rating)
