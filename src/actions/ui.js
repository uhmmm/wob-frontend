export const TOGGLE_LETTER = 'TOGGLE_LETTER'
export const CLOSE_LETTER = 'CLOSE_LETTER'

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
