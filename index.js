import axios from 'axios'

const token = localStorage.getItem('AUTH_TOKEN')

const Request = axios.create({
  baseURL: 'http://localhost:9090/api',
  timeout: 5000,
  headers: {
    authorization: token ? token : ''
  }
})

Request.interceptors.request.use(
  function(config) {
    return config
  },
  function(error) {
    return Promise.reject(error)
  }
)

Request.interceptors.response.use(
  function(response) {
    return response
  },
  function(error) {
    if (error.response) {
      switch (error.response.status) {
        case 401:
          break
      }
    }
    return Promise.reject(error.response)
  }
)

export default Request
