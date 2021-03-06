import React from 'react'
import styled from '@emotion/styled'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'

import { getRouteBySlug } from '../../reducers/routes'
import { getImageById } from '../../reducers/images'

import man from './man.png'
import journalist from './journalist.png'
import typewriter from './typewriter.png'
import typewriterLong from './typewriter-long.png'
import journalistLicking from './journalist-licking.png'
import civilOffice from './civil-office.png'
import checking from './checking.png'
import archive from './archive.png'
import approved from './approved.png'

const images = {
  man,
  journalist,
  typewriter,
  typewriterLong,
  civilOffice,
  journalistLicking,
  checking,
  archive,
  approved
}

const FormImagesContainer = styled.div({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  height: '100%'
})

const Img = styled.img({ width: '100%' })

const Image = ({ image }) => {
  return image ? (
    <FormImagesContainer>
      <Img src={images[image.imageRef]} alt="" />
    </FormImagesContainer>
  ) : null
}

const mapStateToProps = (state, { match }) => {
  let route = getRouteBySlug(state, { slug: match.params.formSlug })
  return {
    image: getImageById(state, {
      imageId: route.linkedImageId && route.linkedImageId[0]
    })
  }
}

const ImageConnected = connect(mapStateToProps)(Image)

const ImagesRouted = withRouter(ImageConnected)

export { ImagesRouted }
