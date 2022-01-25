import axios, { AxiosRequestConfig, AxiosResponse, AxiosRequestHeaders } from 'axios'
import { ElMessage } from 'element-plus'

axios.defaults.baseURL = process.env.VITE_BASE_URL,
axios.interceptors.request.use((config: AxiosRequestConfig) => {
  return config
}, error => {
  return Promise.reject(error)
})

axios.interceptors.response.use((response: AxiosResponse) => {
  const { code, message } = response.data
  if (code !== 0) { // 错误提示
    ElMessage.error(message)
    return Promise.reject(message)
  }
  return response.data
}, error => {
  return Promise.reject(error)
})

export default axios