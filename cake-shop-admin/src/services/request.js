import axios from 'axios'

const token = localStorage.getItem('CAKE_SHOP_AUTH_TOKEN')

const Request = axios.create({
  baseURL: 'http://localhost:9090/api',
  timeout: 5000,
  headers: {
    authorization: token ? token : ''
  }
})

export default Request
