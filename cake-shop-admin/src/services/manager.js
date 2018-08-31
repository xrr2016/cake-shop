import request from './request'

async function login(name, password) {
  const res = await request.post('/manager/login', { name, password })
  return res
}

async function signup(fields) {
  const res = await request.post('/manager/signup', fields)
  return res
}

export default {
  login,
  signup
}
