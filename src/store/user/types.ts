export enum USER_ACTIONS {
  SET_USER_NAME = 'SET_USER_NAME',
}

type SetUser = {
  type: typeof USER_ACTIONS.SET_USER_NAME
  userName: string
}

export type ActionTypes = SetUser
