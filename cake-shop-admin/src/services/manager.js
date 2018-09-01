import request from './request'

async function login(name, password) {
  const res = await request.post('/manager/login', { name, password })
  return res
}

async function signup(fields) {
  const res = await request.post('/manager/signup', fields)
  return res
}

async function getManagers() {
  const res = await request.get('/manager')
  return res
}

async function removeManager(id) {
  const res = await request.delete(`/manager/${id}`)
  return res
}

export default {
  login,
  signup,
  getManagers,
  removeManager
}
