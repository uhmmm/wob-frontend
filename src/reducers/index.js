import { combineReducers } from 'redux'
import { organizations } from './organisations'
import { letters } from './letters'
import { routes } from './routes'
import { contents } from './contents'

const reducers = combineReducers({
  organizations,
  letters,
  routes,
  contents
})

export default reducers
