import { createStore, applyMiddleware, combineReducers } from 'redux'
import thunk from 'redux-thunk'

import { user } from './user/reducer'

export const rootReducer = combineReducers({
  user,
})

const store = createStore(rootReducer, applyMiddleware(thunk))

export default store
