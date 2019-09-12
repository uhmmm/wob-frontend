import { combineReducers } from 'redux'
import { organizations } from './organisations'
import { letters } from './letters'

const reducers = combineReducers({
  organizations,
  letters
})

export default reducers
