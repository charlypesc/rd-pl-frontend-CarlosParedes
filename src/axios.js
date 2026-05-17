import axios from 'axios'

const apiClient = axios.create({
  baseURL: 'https://rd-pl-api-carlos-paredes.onrender.com',
  headers: {
    'Content-Type': 'application/json',
  },
})
export default apiClient