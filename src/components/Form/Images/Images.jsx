import React from 'react'
import styled from '@emotion/styled'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'

import man from './man.svg'
import { getRouteBySlug } from '../../../reducers/routes'

const FormImagesContainer = styled.main({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  height: '100%'
})

const Img = styled.img({ width: '100%' })

const Image = ({ route }) => (
  <FormImagesContainer>
    <Img src={man} alt="" />
  </FormImagesContainer>
)

const mapStateToProps = (state, { match }) => {
  return {
    route: getRouteBySlug({ state, slug: match.params.formSlug })
  }
}

const ImageConnected = connect(
  mapStateToProps,
  {}
)(Image)

const ImagesRouted = withRouter(ImageConnected)

export { ImagesRouted }
