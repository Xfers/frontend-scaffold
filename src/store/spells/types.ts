export type Spell = {
  index: string
  name: string
  url: string
}

export enum SPELLS_ACTIONS {
  SET_IS_LOADING = 'SET_IS_LOADING',
  GET_SPELLS = 'GET_SPELLS',
  SET_CURRENT_PAGE = 'SET_CURRENT_PAGE',
}

type SetIsLoading = {
  type: typeof SPELLS_ACTIONS.SET_IS_LOADING
  isLoading: boolean
}

type GetSpells = {
  type: typeof SPELLS_ACTIONS.GET_SPELLS
  spells: Spell[]
}

type SetCurrentPage = {
  type: typeof SPELLS_ACTIONS.SET_CURRENT_PAGE
  currentPage: number
}

export type ActionTypes = SetIsLoading | GetSpells | SetCurrentPage
