import { groupBy } from 'lodash'
import { normalize, schema } from 'normalizr'
import uuid from 'uuid/v4'

import variables from '../data/model'

export const CREATE_DOCUMENT = 'CREATE_DOCUMENT'

const variableSchema = new schema.Entity(
  'variables',
  {},
  { idAttribute: 'name' }
)
const variablesSchema = [variableSchema]

const documentModelData = groupBy(variables, 'model').document
const normLetterModelData = normalize(documentModelData, variablesSchema)
const document = normLetterModelData.entities.variables

export const createDocument = letterId => {
  return {
    type: CREATE_DOCUMENT,
    payload: {
      ...document,
      documentId: uuid(),
      letterId
    }
  }
}
