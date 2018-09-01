const express = require('express')
const multer = require('multer')
const router = express.Router()
const auth = require('../middleware/auth')
const controller = require('../controllers/product')

const storage = multer.diskStorage({
  destination: function(req, file, cb) {
    cb(null, './uploads/products')
  },
  filename: function(req, file, cb) {
    cb(null, file.originalname)
  }
})
const upload = multer({ storage, limits: { fieldSize: 1024 * 1024 * 5 } })

router.get('/', controller.getProducts)
router.post('/', upload.single('imgUrl'), controller.addProduct)

router
  .route('/:productId')
  .get(controller.getProduct)
  .put(auth, controller.updateProduct)
  .delete(auth, controller.deleteProduct)

module.exports = router
