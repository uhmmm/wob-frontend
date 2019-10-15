import { combineReducers } from 'redux'

import { CREATE_LETTER, SET_LETTER_VARIABLE } from '../actions/letters'
import { CREATE_DOCUMENT } from '../actions/documents'
import { CREATE_PERIOD } from '../actions/periods'
import { CREATE_PERSON } from '../actions/people'

export const lettersById = (state = {}, action) => {
  let letterId
  switch (action.type) {
    case CREATE_LETTER:
      let nextId = (Math.max(Object.keys(state)) || 0) + 1
      return { ...state, [nextId]: { ...action.payload, letterId: nextId } }
    case CREATE_DOCUMENT:
      letterId = action.payload.letterId
      let documentId = action.payload.documentId
      return {
        ...state,
        [letterId]: {
          ...state[letterId],
          documents: {
            ...state[letterId].documents,
            value: [...(state[letterId].documents.value || []), documentId]
          }
        }
      }

    case CREATE_PERIOD:
      letterId = action.payload.letterId
      let periodId = action.payload.periodId
      return {
        ...state,
        [letterId]: {
          ...state[letterId],
          periods: {
            ...state[letterId].periods,
            value: [...(state[letterId].periods.value || []), periodId]
          }
        }
      }

    case CREATE_PERSON:
      letterId = action.payload.letterId
      if (letterId) {
        let personId = action.payload.personId
        return {
          ...state,
          [letterId]: {
            ...state[letterId],
            people: {
              ...state[letterId].people,
              value: [...(state[letterId].people.value || []), personId]
            }
          }
        }
      } else {
        return state
      }

    case SET_LETTER_VARIABLE:
      letterId = action.payload.letterId
      return {
        ...state,
        [letterId]: {
          ...state[letterId],
          [action.payload.variableName]: {
            ...state[letterId][action.payload.variableName],
            value: action.payload.variableValue
          }
        }
      }

    default:
      return state
  }
}

function allLetters(state = [], action) {
  switch (action.type) {
    case CREATE_LETTER:
      let nextId = (Math.max(Object.keys(state)) || 0) + 1
      return [...new Set([...state, nextId])]
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
