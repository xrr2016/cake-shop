import request from './request'

async function getAllUsers() {
  return await request.get('/user')
}

export default {
  getAllUsers
}
