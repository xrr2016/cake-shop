const express = require('express')
const morgan = require('morgan')
const mongoose = require('mongoose')
const cors = require('cors')

const routes = require('./routes')
const app = express()

mongoose.Promise = global.Promise

require('dotenv').config()

const DB_URI = `mongodb://${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_NAME}`

mongoose.connect(
  DB_URI,
  { useNewUrlParser: true }
)
mongoose.connection.on('', error => console.error(error))

app.use(morgan('tiny'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use(cors({ optionsSuccessStatus: 200 }))
app.use('/api/user', routes.user)
app.use('/api/manager', routes.manager)
app.use('/api/product', routes.product)
app.use('/api/upload', routes.upload)
app.use('/uploads', express.static('uploads'))
app.use('*', (req, res) => res.status(404).end('Not Found!'))

app.listen(process.env.PORT, () => {
  console.log(`Server running on port ${process.env.PORT}`)
})
