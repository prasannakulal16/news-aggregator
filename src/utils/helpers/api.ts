import axios from 'axios'
import { ApiParams, ApiResponse } from '../types'

export const getApi = async (url: string, params: ApiParams): Promise<ApiResponse | null> => {
  try {
    const response = await axios.get(url, { params })
    return response.data
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error('API request failed:', error)
    return null
  }
}
