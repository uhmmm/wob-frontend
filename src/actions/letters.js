import { groupBy } from 'lodash'
import { normalize, schema } from 'normalizr'

import variables from '../data/model'

export const CREATE_LETTER = 'CREATE_LETTER'

const variableSchema = new schema.Entity(
  'variables',
  {},
  { idAttribute: 'name' }
)
const variablesSchema = [variableSchema]

const letterModelData = groupBy(variables, 'model').letters
const normLetterModelData = normalize(letterModelData, variablesSchema)
const letter = normLetterModelData.entities.variables

export const createLetter = () => {
  return {
    type: CREATE_LETTER,
    payload: {
      ...letter
    }
  }
}
