import { Reducer } from 'redux'
import { Account, ActionTypes, USER_ACTIONS } from './types'

const initialState = {
  userName: 'Andy',
}

type State = {
  userName: string
}

export const user: Reducer<State, ActionTypes> = (state = initialState, action) => {
  switch (action.type) {
    case USER_ACTIONS.SET_USER_NAME: {
      return {
        ...state,
        userName: action.userName,
      }
    }

    default:
      return state
  }
}
