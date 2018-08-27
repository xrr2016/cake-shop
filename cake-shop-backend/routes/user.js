const express = require('express')
const router = express.Router()

const auth = require('../middleware/auth')
const controller = require('../controllers/user')

router.get('/', controller.getUsers)
router.post('/signup', controller.signUp)
router.post('/login', controller.login)

router
  .route('/:userId')
  .all(auth)
  .get(controller.getUser)
  .put(controller.update)
  .delete(controller.remove)

module.exports = router
