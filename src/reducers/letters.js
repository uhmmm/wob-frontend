import { combineReducers } from 'redux'
import { groupBy } from 'lodash'
import { normalize, schema } from 'normalizr'

import variables from '../data/model'

const letterModelData = groupBy(variables, 'model').letter

const letterVariableSchema = new schema.Entity(
  'variables',
  {},
  { idAttribute: 'name' }
)
const letterSchema = [letterVariableSchema]

const normLetterModelData = normalize(letterModelData, letterSchema)
const letter = normLetterModelData.entities.variables

const FETCH_LETTERS = 'FETCH_LETTERS'

export const lettersById = (
  state = { 1: { ...letter, letterId: 1 } },
  action
) => {
  switch (action.type) {
    case FETCH_LETTERS:
      return { ...state, ...action.payload.entities.letters }
    default:
      return state
  }
}

function allLetters(state = [], action) {
  switch (action.type) {
    case FETCH_LETTERS:
      if (action.payload && action.payload.result) {
        return [...new Set([...state, ...action.payload.result])]
      }
      return state
    default:
      return state
  }
}

export const letters = combineReducers({
  byId: lettersById,
  allIds: allLetters
})

export const getLetterById = (state, letterId) => {
  return state.letters.byId[letterId]
}
