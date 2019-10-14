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

// parse value to default and correct type
const parseType = variable => {
  switch (variable.type) {
    case 'array':
      return []
    case 'boolean':
      return variable.defaultValue === 'true'
    default:
      return variable.defaultValue
  }
}

const variablesParsed = variables.map(variable => {
  return {
    ...variable,
    value: parseType(variable)
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
