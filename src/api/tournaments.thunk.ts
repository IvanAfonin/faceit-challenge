import {
  createTournamentAction,
  createTournamentErrorAction,
  createTournamentPendingAction,
  deleteTournamentAction,
  editTournamentAction,
  editTournamentErrorAction,
  getTournamentsAction,
  getTournamentsErrorAction,
  getTournamentsPendingAction
} from '../actions/tournaments';
import { Dispatch } from 'redux';
import { createTournamentAPI, deleteTournamentAPI, editTournamentAPI, getTournamentsAPI } from './tournaments';

export const getTournamentsThunk = (query = '') => async (dispatch: Dispatch) =>{
  dispatch(getTournamentsPendingAction())
  try{
    const response = await getTournamentsAPI(query)
    dispatch(getTournamentsAction(response))
  }catch (error){
    dispatch(getTournamentsErrorAction())
  }
}

export const createTournamentThunk = (name: string) => async (dispatch: Dispatch) =>{
  dispatch(createTournamentPendingAction())
  try {
    const response = await createTournamentAPI(name)
    dispatch(createTournamentAction(response))
  }catch (error){
    dispatch(createTournamentErrorAction())
  }

}

export const editTournamentThunk = (name: string, id :string) => async (dispatch: Dispatch) =>{
  try {
    const response = await editTournamentAPI(name, id)
    dispatch(editTournamentAction(response))
  }catch (error){
    dispatch(editTournamentErrorAction())
  }

}

export const deleteTournamentThunk = (id: string) => async (dispatch: Dispatch) =>{
  await deleteTournamentAPI(id)
  dispatch(deleteTournamentAction(id))
}
