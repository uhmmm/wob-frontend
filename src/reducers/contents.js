import { combineReducers } from 'redux'
import { normalize, schema } from 'normalizr'

import { getRouteBySlug } from './routes'

import contentData from '../data/contents'

const contentSchema = new schema.Entity(
  'contents',
  {},
  { idAttribute: 'contentId' }
)
const contentsSchema = [contentSchema]

const normContentData = normalize(contentData, contentsSchema)

export const contentsById = (
  state = normContentData.entities.contents,
  action
) => {
  return state
}

function allContents(state = [normContentData.result], action) {
  return state
}

export const contents = combineReducers({
  byId: contentsById,
  allIds: allContents
})

export const getContentsBySlug = ({ state, slug }) => {
  const route = getRouteBySlug({ state, slug })
  return route
    ? route.contentIds.map(recordId => {
        return state.contents.byId[recordId]
      })
    : null
}
