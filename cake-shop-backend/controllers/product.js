const validator = require('validator')
const Product = require('../models/product')

async function getProducts(req, res) {
  Product.find()
    .exec()
    .then(products => {
      return res.status(200).json({ success: true, products })
    })
    .catch(error => {
      return res.status(500).json({ success: false, error })
    })
}

async function getProduct(req, res) {
  const { productId } = req.params

  Product.findById({ _id: productId })
    .exec()
    .then(product => {
      return res.status(200).json({ success: true, product })
    })
    .catch(error => {
      return res.status(404).json({ success: false, error, message: '未找到商品，请重试' })
    })
}

async function addProduct(req, res, next) {
  const imgUrl = `${process.env.HOSTNAME}:${process.env.PORT}/${req.file.path}`
  const { name, description, price, stock } = req.body

  if (validator.isEmpty(name)) {
    return res.status(400).json({ success: false, message: '请输入商品名称' })
  }

  if (!validator.isNumeric(price + '')) {
    return res.status(400).json({ success: false, message: '请输入正确的价格数据' })
  }

  const newProduct = new Product({ name, description, price, stock, imgUrl })

  newProduct
    .save()
    .then(result => {
      return res.status(201).json({ success: true, message: '添加商品成功', result })
    })
    .catch(error => {
      return res.status(500).json({ success: false, message: '出错了，请重试' })
    })
}

async function updateProduct(req, res, next) {
  const { productId } = req.params
  const {} = req.body
  Product.findByIdAndUpdate({ _id: productId }, {})
    .exec()
    .then(product => {
      return res.status(200).json({ success: true, message: '更新成功' })
    })
    .catch(error => {
      return res.status(404).json({ success: false, message: '未找到商品，请重试' })
    })
}

async function deleteProduct(req, res, next) {
  const { productId } = req.params
  Product.findByIdAndRemove({ _id: productId })
    .exec()
    .then(res => {
      return res.status(200).json({ success: true, message: '删除成功' })
    })
    .catch(error => {
      return res.status(500).json({ success: false, message: '出错了，请重试' })
    })
}

module.exports = {
  getProduct,
  getProducts,
  addProduct,
  updateProduct,
  deleteProduct
}
