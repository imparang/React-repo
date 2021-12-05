import axios from 'axios'

export const getApiAxios = (type, data) => {
  return axios.post(`/board?type=${type}`, data)
}
