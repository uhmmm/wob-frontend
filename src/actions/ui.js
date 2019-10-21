export const TOGGLE_LETTER = 'TOGGLE_LETTER'
export const CLOSE_LETTER = 'CLOSE_LETTER'
export const SET_TAB = 'SET_TAB'

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

export const setTab = tabIndex => {
  return {
    type: SET_TAB,
    payload: {
      tabIndex
    }
  }
}
