import { combineReducers } from 'redux'

import { CREATE_PERSON } from '../actions/people'

export const peopleById = (state = {}, action) => {
  switch (action.type) {
    case CREATE_PERSON:
      return { ...state, [action.payload.personId]: action.payload }
    default:
      return state
  }
}

function allPeople(state = [], action) {
  switch (action.type) {
    case CREATE_PERSON:
      return [...new Set([...state, action.payload.personId])]
    default:
      return state
  }
}

export const people = combineReducers({
  byId: peopleById,
  allIds: allPeople
})

export const getPersonById = (state, personId) => {
  return state.people.byId[personId]
}
