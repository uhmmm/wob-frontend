import { TOGGLE_LETTER } from '../actions/ui'

const ui = (state = { letterIsVisible: true }, action) => {
  switch (action.type) {
    case TOGGLE_LETTER:
      return { ...state, letterIsVisible: !state.letterIsVisible }
    default:
      return state
  }
}

export { ui }

export const getLetterVisibility = state => {
  return state.ui.letterIsVisible
}
