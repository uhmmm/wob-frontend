import { groupBy } from 'lodash'
import { normalize, schema } from 'normalizr'

import variables from '../data/model'

// Schema
const variableSchema = new schema.Entity(
  'variables',
  {},
  { idAttribute: 'name' }
)
const variablesSchema = [variableSchema]

// Splitter
const splitter = dataType => {
  const documentModelData = groupBy(variables, 'model')[dataType]
  const normLetterModelData = normalize(documentModelData, variablesSchema)
  return normLetterModelData.entities.variables
}

const models = {
  documents: splitter('documents'),
  letters: splitter('letters'),
  people: splitter('people'),
  fields: splitter('fields')
}

export default models
