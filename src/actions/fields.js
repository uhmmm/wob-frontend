import uuid from 'uuid/v4'
import models from './models'

export const CREATE_FIELD = 'CREATE_FIELD'
export const SET_FIELD_VARIABLE = 'SET_FIELD_VARIABLE'

export const createField = documentId => {
  return {
    type: CREATE_FIELD,
    payload: {
      ...models.fields,
      fieldId: uuid(),
      documentId
    }
  }
}

export const setFieldVariable = (fieldId, variableId, variableValue) => {
  return {
    type: SET_FIELD_VARIABLE,
    payload: {
      fieldId,
      variableId,
      variableValue
    }
  }
}
