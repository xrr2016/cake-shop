const mongoose = require('mongoose')
const Schema = mongoose.Schema

const commentSchema = new Schema({
  content: {
    type: String,
    required: true,
    default: ''
  },
  rate: {
    type: Number,
    default: 0.0
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true
  }
}, {
  timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' }
})

module.exports = mongoose.model('Comment', commentSchema)

