import { combineReducers } from 'redux'
import { normalize, schema } from 'normalizr'
import { filter, includes } from 'lodash'

import { getRouteBySlug } from './routes'

import elementData from '../data/formElements'

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

export const formElements = combineReducers({
  byId: elementsById,
  allIds: allElements
})

export const getElementsBySlug = (state, { slug }) => {
  const route = getRouteBySlug(state, { slug })
  const selectedElements = route
    ? route.elementIds
        .map(recordId => {
          return state.formElements.byId[recordId]
        })
        .sort((a, b) => {
          return a.order - b.order
        })
    : null
  return selectedElements
}

export const getElementsByProperty = (state, { partOf, type, routeId }) => {
  return filter(state.formElements.byId, filterValue => {
    let routeFilter = routeId ? filterValue.routeId[0] === routeId[0] : true
    let partOfFilter = partOf
      ? partOf.some(mapValue => includes(filterValue.partOf, mapValue))
      : true
    let typeFilter = type ? includes(filterValue.type, type) : true
    return routeFilter && partOfFilter && typeFilter
  })
}

export const getElementById = (state, elementId) => {
  return state.formElements.byId[elementId]
}
