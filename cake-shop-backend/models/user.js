const { mongoose, Schema, createModel } = require('./index')

const userSchema = {
  name: {
    type: String,
    default: ''
  },
  bio: {
    type: String,
    default: ''
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  }
}

module.exports = createModel('User', userSchema)
