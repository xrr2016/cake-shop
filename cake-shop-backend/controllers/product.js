const validator = require('validator')
const Product = require('../models/product')

async function getTopProducts(req, res) {
  Product.find()
    .$where('this.top === true')
    .exec()
    .then(topProducts => {
      return res.status(200).json({ success: true, topProducts })
    })
    .catch(error => {
      return res.status(500).json({ success: false, error })
    })
}

async function getRecommendProducts(req, res) {
  Product.find({})
    .exec()
    .then(products => {
      const recommendProducts = products.filter(p => p.category.includes('recommend'))
      return res.status(200).json({
        success: true,
        recommendProducts
      })
    })
    .catch(error => {
      return res.status(500).json({ success: false, error })
    })
}

async function getProducts(req, res) {
  const sort = req.params.sort ? req.params.sort : -1

  Product.find()
    .sort({ updated_at: sort })
    .$where('this.publish === true && this.top !== true')
    .exec()
    .then(products => {
      return res.status(200).json({ success: true, products, total: products.length })
    })
    .catch(error => {
      return res.status(500).json({ success: false, error })
    })
}

async function getAllProducts(req, res) {
  const sort = req.params.sort ? req.params.sort : -1

  Product.find()
    .sort({ updated_at: sort })
    .exec()
    .then(products => {
      return res.status(200).json({ success: true, products, total: products.length })
    })
    .catch(error => {
      return res.status(500).json({ success: false, error })
    })
}

async function getProductDetail(req, res) {
  const { productId } = req.params

  console.log(productId)

  Product.findOne({ _id: productId })
    .exec()
    .then(product => {
      return res.status(200).json({ success: true, product })
    })
    .catch(error => {
      return res.status(404).json({ success: false, error, message: '未找到商品，请重试' })
    })
}

async function addProduct(req, res, next) {
  const { name, description, price, stock, category, imgList, publish, rate } = req.body

  if (validator.isEmpty(name)) {
    return res.status(400).json({ success: false, message: '请输入商品名称' })
  }

  if (!validator.isNumeric(price + '')) {
    return res.status(400).json({ success: false, message: '请输入正确的价格数据' })
  }

  if (!imgList.length) {
    return res.status(400).json({ success: false, message: '请至少添加一张商品图片' })
  }

  const oldProduct = await Product.findOne({ name }).exec()

  if (oldProduct !== null) {
    return res.status(409).json({ success: false, message: '商品已存在' })
  }

  const newProduct = new Product(req.body)

  newProduct
    .save()
    .then(result => {
      return res.status(201).json({ success: true, message: '添加商品成功', result })
    })
    .catch(error => {
      return res.status(500).json({ success: false, message: '出错了，请重试', error })
    })
}

async function updateProduct(req, res, next) {
  const { updates } = req.body
  const { productId } = req.params

  Product.findByIdAndUpdate(productId, { ...updates }, { new: true, runValidators: true }, null)
    .exec()
    .then(product => {
      return res.status(200).json({ success: true, message: '更新成功', product })
    })
    .catch(error => {
      return res.status(404).json({ success: false, message: '未找到商品，请重试', error })
    })
}

async function deleteProduct(req, res, next) {
  const { productId } = req.params

  Product.findByIdAndRemove(productId)
    .exec()
    .then(() => {
      return res.status(200).json({ success: true, message: '删除成功' })
    })
    .catch(error => {
      return res.status(500).json({ success: false, message: '出错了，请重试', error })
    })
}

module.exports = {
  getProducts,
  getAllProducts,
  getTopProducts,
  getProductDetail,
  getRecommendProducts,
  addProduct,
  updateProduct,
  deleteProduct
}
