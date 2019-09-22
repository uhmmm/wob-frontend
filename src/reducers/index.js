import { combineReducers } from 'redux'
import { organizations } from './organisations'
import { letters } from './letters'
import { routes } from './routes'
import { contents } from './contents'
import { images } from './images'

const reducers = combineReducers({
  organizations,
  letters,
  routes,
  contents,
  images
})

export default reducers
