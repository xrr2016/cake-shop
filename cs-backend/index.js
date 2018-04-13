const express = require('express')
const app = express()

app.use('/', async (req, res) => {
  res.send('hello world')
})

app.listen(3000, () => {
  console.log('Server listening on port 3000.')
})
