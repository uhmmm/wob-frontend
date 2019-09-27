import { combineReducers } from 'redux'
import { normalize, schema } from 'normalizr'

import imageData from '../data/images'

const imageSchema = new schema.Entity('images', {}, { idAttribute: 'imageId' })
const imagesSchema = [imageSchema]

const normImageData = normalize(imageData, imagesSchema)

export const imagesById = (state = normImageData.entities.images, action) => {
  return state
}

function allImages(state = [normImageData.result], action) {
  return state
}

export const images = combineReducers({
  byId: imagesById,
  allIds: allImages
})

export const getImageById = (state, { imageId }) => {
  return state.images.byId[imageId]
}
