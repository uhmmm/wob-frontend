import { combineReducers } from 'redux'
import { groupBy } from 'lodash'
import { normalize, schema } from 'normalizr'

import variables from '../data/model'

const variableSchema = new schema.Entity(
  'variables',
  {},
  { idAttribute: 'name' }
)
const variablesSchema = [variableSchema]

const letterModelData = groupBy(variables, 'model').letter
const normLetterModelData = normalize(letterModelData, variablesSchema)
const letter = normLetterModelData.entities.variables

export const lettersById = (
  state = { 1: { ...letter, letterId: 1 } },
  action
) => {
  return state
}

function allLetters(state = [], action) {
  return state
}

export const letters = combineReducers({
  byId: lettersById,
  allIds: allLetters
})

export const getLetterById = (state, letterId) => {
  return state.letters.byId[letterId]
}
