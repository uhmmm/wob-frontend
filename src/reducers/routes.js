import { combineReducers } from 'redux'
import { normalize, schema } from 'normalizr'
import { find } from 'lodash'

import routeData from '../data/routes'

const routeSchema = new schema.Entity('routes', {}, { idAttribute: 'routeId' })
const routesSchema = [routeSchema]

const normRouteData = normalize(routeData, routesSchema)

export const routesById = (state = normRouteData.entities.routes, action) => {
  return state
}

function allRoutes(state = [normRouteData.result], action) {
  return state
}

export const routes = combineReducers({
  byId: routesById,
  allIds: allRoutes
})

export const getRouteBySlug = (state, { slug }) => {
  return find(state.routes.byId, { slug })
}

export const getRouteById = (state, { routeId }) => {
  return state.routes.byId[routeId]
}
