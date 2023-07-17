import axios, {AxiosResponse} from 'axios'
const API_BASE_URL = 'https://mock.shop/api'

const get = async <T>(path: string): Promise<T> => {
  try {
    const response: AxiosResponse<T> = await axios.get(`${API_BASE_URL}/${path}`)
    return response.data
  } catch (error) {
    console.error(`Error al hacer la solicitud GET en ${path}:`, error)
    throw error
  }
}

export {get}
