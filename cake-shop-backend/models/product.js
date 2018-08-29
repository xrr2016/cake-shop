const mongoose = require('mongoose')
const Schema = mongoose.Schema

const productSchema = new Schema({
  name: {
    type: String,
    required: true,
    default: ''
  },
  description: {
    type: String,
    default: ''
  },
  price: {
    type: Number,
    required: true
  },
  stock: {
    type: Number,
    default: 0
  },
  imgUrl: {
    type: String,
    default: ''
  },
  rate: {
    type: Schema.Types.Decimal128,
    default: 5.0
  }
})

module.exports = mongoose.model('Product', productSchema)
