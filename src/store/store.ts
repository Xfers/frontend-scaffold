import { createStore, applyMiddleware, combineReducers } from 'redux'
import thunk from 'redux-thunk'

import { monsters } from './monsters/reducer'

export const rootReducer = combineReducers({
  monsters,
})

const store = createStore(rootReducer, applyMiddleware(thunk))

export default store
