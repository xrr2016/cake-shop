const express = require('express')
const router = express.Router()
const auth = require('../middleware/auth')
const controller = require('../controllers/product')

router.get('/', controller.getAllProducts)
router.get('/top', controller.getTopProducts)
router.get('/recommend', controller.getRecommendProducts)
router.get('/detail/:productId', controller.getProductDetail)
router.get('/:sort', controller.getProducts)
router.post('/', controller.addProduct)

router
  .route('/:productId')
  .put(auth, controller.updateProduct)
  .delete(auth, controller.deleteProduct)

module.exports = router
