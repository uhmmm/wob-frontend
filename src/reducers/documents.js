import { combineReducers } from 'redux'

import { CREATE_DOCUMENT } from '../actions/documents'

export const documentsById = (state = {}, action) => {
  switch (action.type) {
    case CREATE_DOCUMENT:
      return { ...state, [action.payload.documentId]: action.payload }
    default:
      return state
  }
}

function allDocuments(state = [], action) {
  switch (action.type) {
    case CREATE_DOCUMENT:
      return [...new Set([...state, action.payload.documentId])]
    default:
      return state
  }
}

export const documents = combineReducers({
  byId: documentsById,
  allIds: allDocuments
})

export const getDocumentById = (state, letterId) => {
  return state.letters.byId[letterId]
}
