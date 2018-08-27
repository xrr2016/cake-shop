const express = require('express')
const morgan = require('morgan')
const mongoose = require('mongoose')
const routes = require('./routes')

const app = express()

mongoose.Promise = global.Promise

require('dotenv').config()

const DB_URI = `mongodb://${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_NAME}`
mongoose.connect(
  DB_URI,
  { useNewUrlParser: true }
)

mongoose.connection.on('', error => {
  console.error(error)
})

app.use(morgan('tiny'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use('/api/user', routes.user)
app.use('/', async (req, res) => {
  res.status(200).end('Hello world')
})

app.listen(3000, () => {
  console.log('App running on port 3000')
})
