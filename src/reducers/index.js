import { combineReducers } from 'redux'

import { routes } from './routes'
import { ui } from './ui'
import { formElements } from './formElements'
import { letterElements } from './letterElements'
import { images } from './images'

import { letters } from './letters'
import { documents } from './documents'
import { organisations } from './organisations'

const reducers = combineReducers({
  routes,
  ui,
  formElements,
  letterElements,
  images,
  letters,
  documents,
  organisations
})

export default reducers
