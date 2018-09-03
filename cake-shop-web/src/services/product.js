import request from './request'

async function getTopProducts() {
  const res = await request.get('/product/top')
  return res
}

async function getProducts() {
  const res = await request.get('/product')
  return res
}

export default {
  getProducts,
  getTopProducts
}
