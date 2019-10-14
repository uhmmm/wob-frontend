import uuid from 'uuid/v4'
import models from './models'

export const CREATE_PERSON = 'CREATE_PERSON'
export const SET_PERSON_VARIABLE = 'SET_PERSON_VARIABLE'

export const createPerson = ({ documentId, letterId }) => {
  return {
    type: CREATE_PERSON,
    payload: {
      ...models.people,
      personId: uuid(),
      documentId,
      letterId
    }
  }
}

export const setPersonVariable = (personId, variableName, variableValue) => {
  return {
    type: SET_PERSON_VARIABLE,
    payload: {
      personId,
      variableName,
      variableValue
    }
  }
}
