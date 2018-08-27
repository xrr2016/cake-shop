const express = require('express')
const router = express.Router()
const userController = require('../controllers/user')

router.get('/', userController.getUsers)
router.post('/signup', userController.signUp)
router.post('/login', userController.login)

router
  .route('/:userId')
  .all((req, res, next) => {
    next()
  })
  .get(userController.getUser)
  .put(userController.update)
  .delete(userController.remove)

module.exports = router
