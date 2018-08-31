import request from './request'

async function login(name, password) {
  const res = await request.post('/manager/login', { name, password })
  return res
}

export default {
  login
}
