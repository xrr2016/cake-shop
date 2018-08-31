const express = require('express')
const router = express.Router()

const auth = require('../middleware/auth')
const controller = require('../controllers/manager')

router.get('/', controller.getManagers)
router.post('/signup', controller.signUp)
router.post('/login', controller.login)

router
  .route('/:managerId')
  .all(auth)
  .get(controller.getManager)
  .put(controller.update)
  .delete(controller.remove)

module.exports = router
