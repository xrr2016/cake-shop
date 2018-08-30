const mongoose = require('mongoose')
const Schema = mongoose.Schema

function createModel(modelName, modelFields) {
  return mongoose.model(modelName, new Schema(modelFields))
}

module.exports = {
  mongoose,
  Schema,
  createModel
}
