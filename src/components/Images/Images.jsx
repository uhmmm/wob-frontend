import React from 'react'
import styled from '@emotion/styled'
import { withRouter } from 'react-router-dom'

import man from './right.svg'

const FormImagesContainer = styled.main({})

const Images = props => {
  return (
    <FormImagesContainer>
      <img src={man} alt="" />
    </FormImagesContainer>
  )
}

const ImagesRouted = withRouter(Images)

export { ImagesRouted }
