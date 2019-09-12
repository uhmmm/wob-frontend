import { combineReducers } from 'redux'

const FETCH_ORGANIZATIONS = 'FETCH_ORGANIZATIONS'

export const organizationsById = (state = {}, action) => {
  switch (action.type) {
    case FETCH_ORGANIZATIONS:
      return { ...state, ...action.payload.entities.organisations }
    default:
      return state
  }
}

function allOrganizations(state = [], action) {
  switch (action.type) {
    case FETCH_ORGANIZATIONS:
      if (action.payload && action.payload.result) {
        return [...new Set([...state, ...action.payload.result])]
      }
      return state
    default:
      return state
  }
}

export const organizations = combineReducers({
  byId: organizationsById,
  allIds: allOrganizations
})
