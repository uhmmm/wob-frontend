import { combineReducers } from 'redux'

const FETCH_LETTERS = 'FETCH_LETTERS'

export const lettersById = (state = {}, action) => {
  switch (action.type) {
    case FETCH_LETTERS:
      return { ...state, ...action.payload.entities.letters }
    default:
      return state
  }
}

function allLetters(state = [], action) {
  switch (action.type) {
    case FETCH_LETTERS:
      if (action.payload && action.payload.result) {
        return [...new Set([...state, ...action.payload.result])]
      }
      return state
    default:
      return state
  }
}

export const letters = combineReducers({
  byId: lettersById,
  allIds: allLetters
})
