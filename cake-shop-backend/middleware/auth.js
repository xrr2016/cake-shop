const jwt = require('jsonwebtoken')

module.exports = (req, res, next) => {
  const token = req.headers.authorization.split(' ')[1]
  jwt.verify(token, process.env.JWT_KEY, null, (err, decoded) => {
    if (err) {
      return res.status(401).json({ success: false, message: '验证失败' })
    }
    req.userData = decoded
    next()
  })
}
