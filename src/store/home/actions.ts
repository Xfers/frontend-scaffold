import { Dispatch } from '~/store/types'
import { ActionTypes, HOME_ACTIONS } from './types'
import { get, ENDPOINTS } from '~/store/api'

export const getMonsters = () => (dispatch: Dispatch<ActionTypes>) => {
  dispatch({
    type: HOME_ACTIONS.SET_IS_LOADING,
    isLoading: true,
  })

  get(ENDPOINTS.MONSTERS_ENDPOINT).then((resp) => {
    dispatch({
      type: HOME_ACTIONS.GET_MONSTERS,
      monsters: resp.results,
    })
  })
}

export const setCurrentPage = (currentPage: number) => (dispatch: Dispatch<ActionTypes>) => {
  dispatch({
    type: HOME_ACTIONS.SET_CURRENT_PAGE,
    currentPage: currentPage,
  })
}
