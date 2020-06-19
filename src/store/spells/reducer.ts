import { Reducer } from 'redux'
import { ActionTypes, Spell, SPELLS_ACTIONS } from './types'

const initialState = {
  isLoading: false,
  spells: [],
  total: 0,
  currentPage: 0,
}

type State = {
  isLoading: boolean
  spells: Spell[]
  total: number
  currentPage: number
}

export const spells: Reducer<State, ActionTypes> = (state = initialState, action) => {
  switch (action.type) {
    case SPELLS_ACTIONS.SET_IS_LOADING: {
      return {
        ...state,
        isLoading: action.isLoading,
      }
    }

    case SPELLS_ACTIONS.GET_SPELLS: {
      return {
        ...state,
        spells: action.spells,
        isLoading: false,
      }
    }

    case SPELLS_ACTIONS.SET_CURRENT_PAGE: {
      return {
        ...state,
        currentPage: action.currentPage,
      }
    }

    default:
      return state
  }
}
