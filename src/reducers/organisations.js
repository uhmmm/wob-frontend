import { combineReducers } from 'redux'

const FETCH_ORGANIZATIONS = 'FETCH_ORGANIZATIONS'

export const organisationsById = (state = {}, action) => {
  switch (action.type) {
    case FETCH_ORGANIZATIONS:
      return { ...state, ...action.payload.entities.organisations }
    default:
      return state
  }
}

function allOrganisations(state = [], action) {
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

export const organisations = combineReducers({
  byId: organisationsById,
  allIds: allOrganisations
})
