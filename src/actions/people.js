import uuid from 'uuid/v4'
import models from './models'

export const CREATE_PERSON = 'CREATE_PERSON'

export const createField = documentId => {
  return {
    type: CREATE_PERSON,
    payload: {
      ...models.fields,
      personId: uuid(),
      documentId
    }
  }
}
