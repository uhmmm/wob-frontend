import uuid from 'uuid/v4'
import models from './models'

export const CREATE_DOCUMENT = 'CREATE_DOCUMENT'

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
