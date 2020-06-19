export type Monster = {
  index: string
  name: string
  url: string
}

export enum HOME_ACTIONS {
  SET_IS_LOADING = 'SET_IS_LOADING',
  GET_MONSTERS = 'GET_MONSTERS',
  SET_CURRENT_PAGE = 'SET_CURRENT_PAGE',
}

type SetIsLoading = {
  type: typeof HOME_ACTIONS.SET_IS_LOADING
  isLoading: boolean
}

type GetMonsters = {
  type: typeof HOME_ACTIONS.GET_MONSTERS
  monsters: Monster[]
}

type SetCurrentPage = {
  type: typeof HOME_ACTIONS.SET_CURRENT_PAGE
  currentPage: number
}

export type ActionTypes = SetIsLoading | GetMonsters | SetCurrentPage
