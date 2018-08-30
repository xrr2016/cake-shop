const mongoose = require('mongoose')
const Schema = mongoose.Schema

const activitySchema = new Schema({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    default: ''
  },
  product: {
    type: Schema.Types.ObjectId,
    ref: 'Product',
    required: true
  },
  start_at: {
    type: Date,
    required: true
  },
  end_at: {
    type: Date,
    required: true
  }
})

module.exports = mongoose.model('Activity', activitySchema)
