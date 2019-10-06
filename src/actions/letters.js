import models from './models'

export const CREATE_LETTER = 'CREATE_LETTER'

export const createLetter = () => {
  return {
    type: CREATE_LETTER,
    payload: {
      ...models.letters
    }
  }
}
