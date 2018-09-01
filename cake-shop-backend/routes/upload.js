const express = require('express')
const router = express.Router()
const multer = require('multer')

const storage = multer.diskStorage({
  destination: function(req, file, cb) {
    cb(null, './uploads/products')
  },
  filename: function(req, file, cb) {
    cb(null, file.originalname)
  }
})
const upload = multer({ storage, limits: { fieldSize: 1024 * 1024 * 5 } })

router.post('/product', upload.single('productImg'), (req, res, next) => {
  return res.status(201).json({
    success: true,
    message: '上传成功',
    imgUrl: `${process.env.HOSTNAME}:${process.env.PORT}/${req.file.path}`
  })
})

module.exports = router
