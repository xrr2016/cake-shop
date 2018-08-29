const mongoose = require('mongoose')
const Schema = mongoose.Schema

const commentSchema = new Schema({
  content: {
    type: String,
    required: true,
    default: ''
  }
  rate: {
    type: Decimal128,
    default: 0.0
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true
  }
})

module.exports = mongoose.model('Order', orderSchema)
