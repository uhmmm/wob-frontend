import { groupBy } from 'lodash'
import { normalize, schema } from 'normalizr'

import variables from '../data/models'

// schema
const variableSchema = new schema.Entity(
  'variables',
  {},
  { idAttribute: 'name' }
)
const variablesSchema = [variableSchema]

// parse to correct type
const variablesParsed = variables.map(variable => {
  return {
    ...variable,
    value: variable.type === 'array' ? [] : ''
  }
})

// splitter
const splitter = dataType => {
  const documentModelData = groupBy(variablesParsed, 'model')[dataType]
  const normLetterModelData = normalize(documentModelData, variablesSchema)
  return normLetterModelData.entities.variables
}

const models = {
  documents: splitter('documents'),
  letters: splitter('letters'),
  people: splitter('people'),
  fields: splitter('fields'),
  periods: splitter('periods')
}

export default models
