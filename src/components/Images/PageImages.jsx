import React from 'react'
import styled from '@emotion/styled'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'

import { getRouteBySlug } from '../../reducers/routes'
import { getImageById } from '../../reducers/images'

import whirlwind from './whirlwind.png'

const images = {
  whirlwind
}

const PageImagesContainer = styled.div({
  position: 'relative',
  display: 'flex',
  padding: '4rem 0',
  justifyContent: 'flex-end'
})

const Img = styled.img({ width: '75%' })

const PageImage = ({ image }) => {
  return (
    <PageImagesContainer>
      <Img src={images[image.imageRef]} alt="" />
    </PageImagesContainer>
  )
}

const mapStateToProps = (state, { match }) => {
  let route = getRouteBySlug(state, { slug: match.params.pageSlug })
  return {
    image: getImageById(state, { imageId: route.linkedImageId[0] })
  }
}

const PageImageConnected = connect(mapStateToProps)(PageImage)

const PageImagesRouted = withRouter(PageImageConnected)

export { PageImagesRouted }
