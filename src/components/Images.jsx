import React from 'react'
import styled from '@emotion/styled'
import { withRouter } from 'react-router-dom'

const FormImagesContainer = styled.main({})

const Images = props => {
  return <FormImagesContainer></FormImagesContainer>
}

const ImagesRouted = withRouter(Images)

export { ImagesRouted }
