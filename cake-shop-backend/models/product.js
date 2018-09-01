const mongoose = require('mongoose')
const Schema = mongoose.Schema

const productSchema = new Schema(
  {
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
      type: Array,
      default: ''
    },
    category: {
      type: Array
    },
    rate: {
      type: Schema.Types.Decimal128,
      default: 5.0
    },
    published: {
      type: Boolean,
      default: false
    }
  },
  {
    timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' }
  }
)

module.exports = mongoose.model('Product', productSchema)
