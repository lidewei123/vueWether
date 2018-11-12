import axios from 'axios'
import { CONFIG } from './config'

// 请求方法统一放在这里
export const getMockData = () => {
  return axios.get(`${CONFIG.host}:3001/posts`)
}

export const getDemo2Data = () => {
  return axios.get(`${CONFIG.host}:3001/demo2Data`)
}
