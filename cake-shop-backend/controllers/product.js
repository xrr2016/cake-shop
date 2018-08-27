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

async function addProduct(req, res, next) {
  const imgUrl = `http://localhost:3000/${req.file.path}`
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
  next()
}

async function deleteProduct(req, res, next) {
  next()
}

module.exports = {
  getProducts,
  addProduct,
  updateProduct,
  deleteProduct
}
