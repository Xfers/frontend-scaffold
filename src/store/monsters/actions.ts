import { Dispatch } from '~/store/types'
import { ActionTypes, Monster, MONSTERS_ACTIONS } from './types'
import { get, ENDPOINTS } from '~/store/api'

export const getMonsters = () => (dispatch: Dispatch<ActionTypes>) => {
  dispatch({
    type: MONSTERS_ACTIONS.SET_IS_LOADING,
    isLoading: true,
  })

  get(ENDPOINTS.MONSTERS_ENDPOINT)
    .then((resp: { results: Monster[] }) => {
      dispatch({
        type: MONSTERS_ACTIONS.GET_MONSTERS,
        monsters: resp.results,
      })
    })
    .catch(() => {})
}

export const setCurrentPage = (currentPage: number) => (dispatch: Dispatch<ActionTypes>) => {
  dispatch({
    type: MONSTERS_ACTIONS.SET_CURRENT_PAGE,
    currentPage: currentPage,
  })
}
