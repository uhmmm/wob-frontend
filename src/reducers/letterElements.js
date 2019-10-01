import { combineReducers } from 'redux'

export const lettersById = (state = {}, action) => {
  return state
}

function allLetters(state = [], action) {
  return state
}

export const letterElements = combineReducers({
  byId: lettersById,
  allIds: allLetters
})
