const { mongoose, Schema, createModel } = require('./index') 

const commentSchema = {
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
}

module.exports = createModel('Order', orderSchema)

