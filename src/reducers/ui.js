import { TOGGLE_LETTER, CLOSE_LETTER } from '../actions/ui'

const ui = (state = { letterIsVisible: false }, action) => {
  switch (action.type) {
    case TOGGLE_LETTER:
      return { ...state, letterIsVisible: !state.letterIsVisible }
    case CLOSE_LETTER:
      return { ...state, letterIsVisible: false }
    default:
      return state
  }
}

export { ui }

export const getLetterVisibility = state => {
  return state.ui.letterIsVisible
}
