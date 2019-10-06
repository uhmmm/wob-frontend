import uuid from 'uuid/v4'
import models from './models'

export const CREATE_FIELD = 'CREATE_FIELD'

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
