import uuid from 'uuid/v4'
import models from './models'

export const CREATE_PERSON = 'CREATE_PERSON'

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
