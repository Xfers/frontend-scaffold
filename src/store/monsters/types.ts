export type Monster = {
  index: string
  name: string
  url: string
}

export enum MONSTERS_ACTIONS {
  SET_IS_LOADING = 'SET_IS_LOADING',
  GET_MONSTERS = 'GET_MONSTERS',
  SET_CURRENT_PAGE = 'SET_CURRENT_PAGE',
}

type SetIsLoading = {
  type: typeof MONSTERS_ACTIONS.SET_IS_LOADING
  isLoading: boolean
}

type GetMonsters = {
  type: typeof MONSTERS_ACTIONS.GET_MONSTERS
  monsters: Monster[]
}

type SetCurrentPage = {
  type: typeof MONSTERS_ACTIONS.SET_CURRENT_PAGE
  currentPage: number
}

export type ActionTypes = SetIsLoading | GetMonsters | SetCurrentPage
