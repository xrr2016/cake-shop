import request from './request'

async function getProducts() {
  const res = await request.get('/product')
  return res
}

async function publishProduct(id) {
  const res = await request.put(`/product/${id}`, { publish: true })
  return res
}

async function addProduct(product) {
  const res = await request.post('/product', product)
  return res
}

async function editProduct(id, updates) {
  const res = await request.put('/product', updates)
  return res
}

async function removeProduct(id) {
  const res = await request.delete(`/product/${id}`)
  return res
}

export default {
  getProducts,
  publishProduct,
  addProduct,
  editProduct,
  removeProduct
}
