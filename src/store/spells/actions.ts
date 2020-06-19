import { Dispatch } from '~/store/types'
import { ActionTypes, Spell, SPELLS_ACTIONS } from './types'
import { get, ENDPOINTS } from '~/store/api'

export const getSpells = () => (dispatch: Dispatch<ActionTypes>) => {
  dispatch({
    type: SPELLS_ACTIONS.SET_IS_LOADING,
    isLoading: true,
  })

  get(ENDPOINTS.SPELLS_ENDPOINT)
    .then((resp: { results: Spell[] }) => {
      dispatch({
        type: SPELLS_ACTIONS.GET_SPELLS,
        spells: resp.results,
      })
    })
    .catch(() => {})
}

export const setCurrentPage = (currentPage: number) => (dispatch: Dispatch<ActionTypes>) => {
  dispatch({
    type: SPELLS_ACTIONS.SET_CURRENT_PAGE,
    currentPage: currentPage,
  })
}
