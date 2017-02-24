
import { routerReducer as routing } from 'react-router-redux'
import { combineReducers } from 'redux'
import todos from './todos'
import filter from './filter'

export default combineReducers({
  routing,
  todos,
  filter
})
