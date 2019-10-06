import { combineReducers } from 'redux'

import { CREATE_FIELD } from '../actions/fields'

export const fieldsById = (state = {}, action) => {
  switch (action.type) {
    case CREATE_FIELD:
      return { ...state, [action.payload.fieldId]: action.payload }
    default:
      return state
  }
}

function allFields(state = [], action) {
  switch (action.type) {
    case CREATE_FIELD:
      return [...new Set([...state, action.payload.fieldId])]
    default:
      return state
  }
}

export const fields = combineReducers({
  byId: fieldsById,
  allIds: allFields
})

export const getFieldById = (state, fieldId) => {
  return state.fields.byId[fieldId]
}
