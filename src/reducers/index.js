import { combineReducers } from 'redux'
import { organizations } from './organisations'
import { letters } from './letters'
import { routes } from './routes'
import { elements } from './elements'
import { images } from './images'
import { ui } from './ui'

const reducers = combineReducers({
  organizations,
  letters,
  routes,
  elements,
  images,
  ui
})

export default reducers
