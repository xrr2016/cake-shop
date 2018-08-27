const express = require('express')
const multer = require('multer')

const router = express.Router()
const auth = require('../middleware/auth')
const controller = require('../controllers/product')

const storage = multer.diskStorage({
  destination: function(req, file, cb) {
    cb(null, './uploads/')
  },
  filename: function(req, file, cb) {
    cb(null, new Date().toISOString() + file.originalname)
  }
})
const upload = multer({ storage, limits: { fieldSize: 1024 * 1024 * 5 } })

router.get('/', controller.getProducts)
router.post('/', upload.single('imgUrl'), controller.addProduct)

router
  .route('/:productId')
  .get(() => {})
  .put(auth, () => {})
  .delete(auth, () => {})

module.exports = router
