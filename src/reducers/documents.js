import { combineReducers } from 'redux'
import { groupBy } from 'lodash'
import { normalize, schema } from 'normalizr'
import uuid from 'uuid/v4'

import variables from '../data/model'

const variableSchema = new schema.Entity(
  'variables',
  {},
  { idAttribute: 'name' }
)
const variablesSchema = [variableSchema]

const documentModelData = groupBy(variables, 'model').document
const normLetterModelData = normalize(documentModelData, variablesSchema)
const document = normLetterModelData.entities.variables

const defaultDocId = uuid()
export const documentsById = (
  state = { [defaultDocId]: { ...document, documentId: defaultDocId } },
  action
) => {
  return state
}

function allDocuments(state = [], action) {
  return state
}

export const documents = combineReducers({
  byId: documentsById,
  allIds: allDocuments
})

export const getDocumentById = (state, letterId) => {
  return state.letters.byId[letterId]
}
