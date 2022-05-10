import { ITournament } from '../api/tournament.types';
import {
  CREATE_TOURNAMENT,
  CREATE_TOURNAMENT_ERROR,
  CREATE_TOURNAMENT_PENDING,
  DELETE_TOURNAMENT,
  EDIT_TOURNAMENT,
  GET_TOURNAMENTS,
  GET_TOURNAMENTS_ERROR,
  GET_TOURNAMENTS_PENDING
} from '../actions/tournaments';
import { AnyAction } from 'redux'

const initialState = {
  tournamentsList: [],
  isLoading: false,
  isError : false,
};

interface IInitialState {
  tournamentsList : Array<ITournament | undefined>;
  isLoading: boolean;
  isError : boolean;
}

export default function tournaments(
  state: IInitialState = initialState,
  action: AnyAction
) {
  switch (action.type){

    case GET_TOURNAMENTS:
      return {
        ...state,
        tournamentsList: action.payload,
        isLoading: false,
        isError: false,
      }

    case GET_TOURNAMENTS_PENDING:
      return {
        ...state,
        isLoading: true
      }

    case GET_TOURNAMENTS_ERROR:
      return {
        ...state,
        isError: true
      }

    case CREATE_TOURNAMENT:
      return {
        ...state,
        tournamentsList: [action.payload, ...state.tournamentsList],
        isLoading: false
      }

    case CREATE_TOURNAMENT_PENDING: {
      return {
        ...state,
        isLoading: true
      }
    }

    case CREATE_TOURNAMENT_ERROR:
      return {
        ...state,
        isError: true
      }

    case EDIT_TOURNAMENT: {
      const filteredTournaments = state.tournamentsList
        .filter((tournament)=> tournament?.id !== action.payload.id)
      return {
        ...state,
        tournamentsList: [action.payload, ...filteredTournaments],
      }
    }

    case DELETE_TOURNAMENT : {
      const filteredTournaments = state.tournamentsList
        .filter((tournament)=> tournament?.id !== action.payload)
      return {
        ...state,
        tournamentsList: filteredTournaments
      }
    }

  }
  return state;
}
