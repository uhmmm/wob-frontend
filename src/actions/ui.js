export const TOGGLE_LETTER = 'TOGGLE_LETTER'
export const CLOSE_LETTER = 'CLOSE_LETTER'
export const SET_ACTIVE_TAB = 'SET_ACTIVE_TAB'

export const toggleLetter = () => {
  return {
    type: TOGGLE_LETTER
  }
}

export const closeLetter = () => {
  return {
    type: CLOSE_LETTER
  }
}

export const setActiveTab = tabIndex => {
  return {
    type: SET_ACTIVE_TAB,
    payload: {
      tabIndex
    }
  }
}
