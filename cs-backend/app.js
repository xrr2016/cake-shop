import express from 'express'
// import { Products } from './models'

// Products.create({
//   name: 'product01',
//   price: 12.3,
//   stock: 100
// }).then(product => console.log(product.toJSON()))

const app = express()

app.use('/', async (req, res) => {
  res.send('hello world')
})

app.listen(3000, () => {
  console.log('Server listening on port 3000.')
})
