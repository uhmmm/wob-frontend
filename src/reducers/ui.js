import { TOGGLE_LETTER, CLOSE_LETTER, SET_ACTIVE_TAB } from '../actions/ui'

const ui = (state = { letterIsVisible: false, activeTab: 0 }, action) => {
  switch (action.type) {
    case TOGGLE_LETTER:
      return { ...state, letterIsVisible: !state.letterIsVisible }
    case CLOSE_LETTER:
      return { ...state, letterIsVisible: false }
    case SET_ACTIVE_TAB:
      return { ...state, activeTab: action.payload.tabIndex }
    default:
      return state
  }
}

export { ui }

export const getLetterVisibility = state => {
  return state.ui.letterIsVisible
}

export const getActiveTab = state => {
  return state.ui.activeTab
}
