import { combineReducers } from 'redux'

import { CREATE_LETTER } from '../actions/letters'
import { CREATE_DOCUMENT } from '../actions/documents'

export const lettersById = (state = {}, action) => {
  switch (action.type) {
    case CREATE_LETTER:
      let nextId = (Math.max(Object.keys(state)) || 0) + 1
      return { ...state, [nextId]: { ...action.payload, letterId: nextId } }
    case CREATE_DOCUMENT:
      let letterId = action.payload.letterId
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
