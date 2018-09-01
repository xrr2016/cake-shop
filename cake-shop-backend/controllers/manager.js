const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const validator = require('validator')
const mongoose = require('mongoose')

const Manager = require('../models/manager')

function isVerifiedField(str) {
  return !validator.isEmpty(str) && validator.isLength(str, { min: 4 })
}

function isVerifiedEmail(email) {
  return !validator.isEmpty(email) && validator.isEmail(email)
}

async function getManagers(req, res) {
  Manager.find()
    .exec()
    .then(managers => {
      return res.status(200).json({ success: true, managers })
    })
    .catch(error => {
      return res.status(500).json({ success: false, error })
    })
}

async function getManager(req, res) {
  const managerId = req.params.userId

  Manager.findById({ _id: managerId })
    .exec()
    .then(user => {
      return res.status(200).json({ success: true, user })
    })
    .catch(error => {
      return res.status(404).json({ success: false, message: '用户不存在' })
    })
}

async function signUp(req, res, next) {
  let { name, email, password, level } = req.body

  if (!isVerifiedField(name)) {
    return res.status(400).json({ success: false, message: '请输入字符长度大于4的用户名' })
  }

  if (!isVerifiedEmail(email)) {
    return res.status(400).json({ success: false, message: '请输入正确的邮箱地址' })
  }

  if (!isVerifiedField(password)) {
    return res.status(400).json({ success: false, message: '请设置长度不小于4个字符的密码' })
  }

  const oldManager = await Manager.findOne({ email }).exec()

  if (oldManager !== null) {
    return res.status(409).json({ success: false, message: '用户已存在' })
  }

  password = await bcrypt.hash(password, 10)

  const newManager = new Manager({ name, email, password, level })

  newManager
    .save()
    .then(result => {
      return res.status(201).json({ success: true, result, message: '注册成功，请登录' })
    })
    .catch(error => {
      return res.status(500).json({ success: false, error, message: '注册失败，请重试' })
    })
}

async function login(req, res, next) {
  const { name, email, password } = req.body

  if (name) {
    checkField({ name })
  }

  if (email) {
    checkField({ email })
  }

  async function checkField(field) {
    const manager = await Manager.findOne(field).exec()

    if (manager === null) {
      return res.status(401).json({ success: false, message: '用户不存在' })
    }

    const isMatch = await bcrypt.compare(password, manager.password)

    if (isMatch) {
      const token = jwt.sign({ field, id: manager._id }, process.env.JWT_KEY, { expiresIn: '10h' })

      return res.status(200).json({
        token,
        success: true,
        message: '登录成功',
        manager: { name: manager.name, email: manager.email }
      })
    } else {
      return res.status(401).json({ success: false, message: '密码错误' })
    }
  }
}

async function update(req, res) {
  const managerId = req.params.managerId
  let { name, email, password, level } = req.body

  if (!name && !email && !password) {
    return res.status(406).json({ success: false, message: '请至少选择一项进行修改' })
  }

  if (name && !isVerifiedField(name)) {
    return res.status(400).json({ success: false, message: '请输入字符长度大于4的用户名' })
  }

  if (email && !isVerifiedEmail(email)) {
    return res.status(400).json({ success: false, message: '请输入正确的邮箱地址' })
  }

  if (password && !isVerifiedField(password)) {
    return res.status(400).json({ success: false, message: '请设置长度不小于4个字符的密码' })
  }

  const updates = Object.create(null)

  if (name) {
    updates.name = name
  }

  if (email) {
    updates.email = email
  }

  if (password) {
    password = await bcrypt.hash(password, 10)
    updates.password = password
  }

  Manager.findByIdAndUpdate({ _id: managerId }, updates, { new: true })
    .exec()
    .then(manager => {
      if (manager === null) {
        return res.status(500).json({ success: false, message: '用户不存在' })
      }
      return res.status(200).json({ success: true, message: '更新成功' })
    })
    .catch(error => {
      return res.status(500).json({ success: false, message: '用户不存在' })
    })
}

async function remove(req, res) {
  const managerId = req.params.managerId

  Manager.findByIdAndRemove({ _id: managerId })
    .exec()
    .then(user => {
      return res.status(200).json({ success: true, message: '删除成功' })
    })
    .catch(error => {
      return res.status(500).json({ success: false, message: '用户不存在' })
    })
}

module.exports = {
  getManagers,
  getManager,
  signUp,
  login,
  update,
  remove
}
