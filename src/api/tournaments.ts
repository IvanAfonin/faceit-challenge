import customFetch from '../utils/customFetch';


export const getTournamentsAPI = async (query = '') => {
  return await customFetch(`/?q=${query}`, {
    method: 'GET',
  }).then(res => res.json())
}

export const createTournamentAPI = async (name: string) => {
  const obj = JSON.stringify({
    name: name
  })
  return await customFetch('/', {
    method: 'POST',
    body: obj
  }).then(res => res.json())
}

export const editTournamentAPI = async (name: string, id: string) => {
  return await customFetch(`/${id}`, {
    method: 'PATCH',
    body : JSON.stringify({
      name: name
    })
  }).then(res => res.json())
}

export const deleteTournamentAPI = async (id :string) => {
  return await customFetch(`/${id}`, {
    method: 'DELETE',
  }).then(res => res.json())
}

