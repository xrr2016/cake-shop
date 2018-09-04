const mongoose = require('mongoose')
const Schema = mongoose.Schema

const orderSchema = new Schema({
  products: {
    type: Array,
    default: [],
    required: true
  },
  total: {
    type: Number,
    required: true,
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  status: {
    type: String,
    required: true,
    default: 'unpaid'
  }
}, {
  timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' }
})

module.exports = mongoose.model('Order', orderSchema)
