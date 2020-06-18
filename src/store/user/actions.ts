import { Dispatch } from '~/store/types'
import { ActionTypes, USER_ACTIONS } from './types'

export const setUserName = (userName: string) => (dispatch: Dispatch<ActionTypes>) => {
  dispatch({
    type: USER_ACTIONS.SET_USER_NAME,
    userName,
  })
}
