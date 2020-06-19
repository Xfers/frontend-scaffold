import { Reducer } from 'redux'
import { ActionTypes, Monster, MONSTERS_ACTIONS } from './types'

const initialState = {
  isLoading: false,
  monsters: [],
  total: 0,
  currentPage: 0,
}

type State = {
  isLoading: boolean
  monsters: Monster[]
  total: number
  currentPage: number
}

export const monsters: Reducer<State, ActionTypes> = (state = initialState, action) => {
  switch (action.type) {
    case MONSTERS_ACTIONS.SET_IS_LOADING: {
      return {
        ...state,
        isLoading: action.isLoading,
      }
    }

    case MONSTERS_ACTIONS.GET_MONSTERS: {
      return {
        ...state,
        monsters: action.monsters,
        isLoading: false,
      }
    }

    case MONSTERS_ACTIONS.SET_CURRENT_PAGE: {
      return {
        ...state,
        currentPage: action.currentPage,
      }
    }

    default:
      return state
  }
}
