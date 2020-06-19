import { createStore, applyMiddleware, combineReducers } from 'redux'
import thunk from 'redux-thunk'

import { monsters } from './monsters/reducer'
import { spells } from './spells/reducer'

export const rootReducer = combineReducers({
  monsters,
  spells,
})

const store = createStore(rootReducer, applyMiddleware(thunk))

export default store
