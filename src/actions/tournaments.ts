import { ITournament } from '../api/tournament.types';

export const GET_TOURNAMENTS = 'GET_TOURNAMENTS'
export const GET_TOURNAMENTS_PENDING = 'GET_TOURNAMENTS_PENDING'
export const GET_TOURNAMENTS_ERROR = 'GET_TOURNAMENTS_ERROR'

export const CREATE_TOURNAMENT = 'CREATE_TOURNAMENT'
export const CREATE_TOURNAMENT_PENDING = 'CREATE_TOURNAMENT_PENDING'
export const CREATE_TOURNAMENT_ERROR = 'CREATE_TOURNAMENT_ERROR'

export const EDIT_TOURNAMENT = 'EDIT_TOURNAMENT'
export const EDIT_TOURNAMENT_ERROR = 'EDIT_TOURNAMENT_ERROR'

export const DELETE_TOURNAMENT = 'DELETE_TOURNAMENT'

export interface IGetTournamentsAction {
  type: string;
  payload: Array<ITournament>
}

export const getTournamentsAction = (tournaments: Array<ITournament>) => {
  return {
    type: GET_TOURNAMENTS,
    payload: tournaments
  }
}

export const getTournamentsPendingAction = () => {
  return {
    type: GET_TOURNAMENTS_PENDING
  }
}

export const getTournamentsErrorAction = () => {
  return {
    type: GET_TOURNAMENTS_ERROR
  }
}

export const createTournamentAction = (tournament :ITournament) => {
  return {
    type: CREATE_TOURNAMENT,
    payload: tournament
  }
}

export const createTournamentPendingAction = () => {
  return {
    type: CREATE_TOURNAMENT_PENDING
  }
}

export const createTournamentErrorAction = () => {
  return {
    type: CREATE_TOURNAMENT_ERROR
  }
}


export const editTournamentAction = (tournament :ITournament) => {
  return {
    type: EDIT_TOURNAMENT,
    payload: tournament
  }
}
export const editTournamentErrorAction = () => {
  return{
    type:EDIT_TOURNAMENT_ERROR
  }
}

export const deleteTournamentAction = (id :string) => {
  return {
    type: DELETE_TOURNAMENT,
    payload: id
  }
}

