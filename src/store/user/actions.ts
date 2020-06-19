import { Dispatch } from '~/store/types'
import { ActionTypes, USER_ACTIONS } from './types'
import { get, ENDPOINTS } from '~/store/api'

export const setUserName = (userName: string) => (dispatch: Dispatch<ActionTypes>) => {
  dispatch({
    type: USER_ACTIONS.SET_USER_NAME,
    userName,
  })

  get(ENDPOINTS.SPELL_ACID_ARROW_ENDPOINT).then((resp) => {
    console.log('resp', resp)
    dispatch({
      type: USER_ACTIONS.SET_USER_NAME,
      userName,
    })
  })
}
