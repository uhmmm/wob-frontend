import { combineReducers } from 'redux'
import { normalize, schema } from 'normalizr'

import letterElementsData from '../data/letterElements'

const letterElementSchema = new schema.Entity(
  'letterElements',
  {},
  { idAttribute: 'elementId' }
)
const letterElementsSchema = [letterElementSchema]

const normLetterElementData = normalize(
  letterElementsData,
  letterElementsSchema
)

export const lettersById = (
  state = normLetterElementData.entities.letterElements,
  action
) => {
  return state
}

function allLetters(state = [normLetterElementData.result], action) {
  return state
}

export const letterElements = combineReducers({
  byId: lettersById,
  allIds: allLetters
})
