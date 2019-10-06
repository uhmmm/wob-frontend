import { combineReducers } from 'redux'

import { CREATE_DOCUMENT } from '../actions/documents'
import { CREATE_FIELD } from '../actions/fields'
import { CREATE_PERSON } from '../actions/people'

export const documentsById = (state = {}, action) => {
  let documentId
  switch (action.type) {
    case CREATE_DOCUMENT:
      return { ...state, [action.payload.documentId]: action.payload }

    case CREATE_FIELD:
      documentId = action.payload.documentId
      let fieldId = action.payload.fieldId
      return {
        ...state,
        [documentId]: {
          ...state[documentId],
          fields: {
            ...state[documentId].fields,
            value: [...(state[documentId].fields.value || []), fieldId]
          }
        }
      }

    case CREATE_PERSON:
      documentId = action.payload.documentId
      if (documentId) {
        let personId = action.payload.personId
        return {
          ...state,
          [documentId]: {
            ...state[documentId],
            people: {
              ...state[documentId].people,
              value: [...(state[documentId].people.value || []), personId]
            }
          }
        }
      } else {
        return state
      }

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

export const getDocumentById = (state, documentId) => {
  return state.documents.byId[documentId]
}
