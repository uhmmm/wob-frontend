import models from './models'

export const CREATE_LETTER = 'CREATE_LETTER'
export const SET_LETTER_VARIABLE = 'SET_LETTER_VARIABLE'

export const createLetter = () => {
  return {
    type: CREATE_LETTER,
    payload: {
      ...models.letters
    }
  }
}

export const setLetterVariable = (letterId, variableName, variableValue) => {
  return {
    type: SET_LETTER_VARIABLE,
    payload: {
      letterId,
      variableName,
      variableValue
    }
  }
}
