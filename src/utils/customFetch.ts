import { API_BASE_URL } from '../constants/api';

export default function customFetch(url: string, options: RequestInit){
  return fetch(`${API_BASE_URL}${url}`,{
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    ...options
  })
}
