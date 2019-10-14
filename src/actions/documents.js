import uuid from 'uuid/v4'
import models from './models'

export const CREATE_DOCUMENT = 'CREATE_DOCUMENT'
export const SET_DOCUMENT_VARIABLE = 'SET_DOCUMENT_VARIABLE'

export const createDocument = letterId => {
  return {
    type: CREATE_DOCUMENT,
    payload: {
      ...models.documents,
      documentId: uuid(),
      letterId
    }
  }
}

export const setDocumentVariable = (
  documentId,
  variableName,
  variableValue
) => {
  return {
    type: SET_DOCUMENT_VARIABLE,
    payload: {
      documentId,
      variableName,
      variableValue
    }
  }
}
