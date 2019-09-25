import { combineReducers } from 'redux'
import { normalize, schema } from 'normalizr'
import { groupBy } from 'lodash'

import { getRouteBySlug } from './routes'

import elementData from '../data/elements'

const elementSchema = new schema.Entity(
  'elements',
  {},
  { idAttribute: 'elementId' }
)
const elementsSchema = [elementSchema]

const normElementData = normalize(elementData, elementsSchema)

export const elementsById = (
  state = normElementData.entities.elements,
  action
) => {
  return state
}

function allElements(state = [normElementData.result], action) {
  return state
}

export const elements = combineReducers({
  byId: elementsById,
  allIds: allElements
})

export const getElementsBySlug = ({ state, slug }) => {
  const route = getRouteBySlug({ state, slug })
  return route
    ? route.elementIds.map(recordId => {
        return state.elements.byId[recordId]
      })
    : null
}

export const getGroupedElementsBySlug = ({ state, slug }) => {
  const elements = getElementsBySlug({ state, slug })
  const grouper = value => {
    return Array.isArray(value.partOf) ? value.partOf[0] : value.partOf
  }
  return groupBy(elements, grouper)
}
