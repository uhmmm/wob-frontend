import { combineReducers } from 'redux'
import { normalize, schema } from 'normalizr'
import { filter, sortBy } from 'lodash'

import letterElementsData from '../data/letterElements'

const letterElementSchema = new schema.Entity(
  'letterElements',
  {},
  { idAttribute: 'elementId' }
)
const letterElementsSchema = [letterElementSchema]

const normLetterElementData = normalize(
  sortBy(letterElementsData, 'order'),
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

export const getLetterElByProperty = (state, { type }) => {
  return filter(state.letterElements.byId, { type })
}

export const getLetterElById = (state, elementId) => {
  return state.letterElements.byId[elementId]
}
