import axios from 'axios'
import { CONFIG } from './config'

export const http = axios.create({
  baseURL: `${CONFIG.host}/v3`,
  timeout: 10000
  // mode: 'no-cors',
  // withCredentials: true
  // headers: {
  //   'Access-Control-Allow-Origin': '*',
  //   'Content-Type': 'application/json'
  // },
  // credentials: 'same-origin'
})

http.interceptors.request.use(
  function(config) {
    config.params = config.params || {}
    config.params.key = CONFIG.key
    return config
  },
  function(err) {
    return Promise.reject(err)
  }
)

http.interceptors.response.use(
  function(response) {
    return response.data
  },
  function(err) {
    return Promise.reject(err)
  }
)
