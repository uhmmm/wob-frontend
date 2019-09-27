import { combineReducers } from 'redux'
import { normalize, schema } from 'normalizr'
import { groupBy, filter, includes, sortBy } from 'lodash'

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
  const selectedElements = route
    ? route.elementIds
        .map(recordId => {
          return state.elements.byId[recordId]
        })
        .sort((a, b) => {
          return a.order - b.order
        })
    : null
  return selectedElements
}

export const getElementsByProperty = (state, { partOf, routeId }) => {
  const routeElements = filter(state.elements.byId, {
    ...(routeId && { routeId })
  })

  const partOfElements = filter(routeElements, value => {
    return includes(value.partOf, partOf[0])
  })

  const sortedElements = sortBy(partOfElements, ['order'])

  return sortedElements
}

export const getGroupedElementsBySlug = ({ state, slug }) => {
  const elements = getElementsBySlug({ state, slug })
  const grouper = value => {
    return Array.isArray(value.partOf) ? value.partOf[0] : value.partOf
  }
  return groupBy(elements, grouper)
}
