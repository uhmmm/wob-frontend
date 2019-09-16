import React from 'react'
import styled from '@emotion/styled'
import { withRouter } from 'react-router-dom'

import { type } from '../styles'

const AsideContainer = styled.aside({})

const Title = styled.h1({ ...type.title.medium })

const Aside = ({ match }) => {
  console.log(match)
  return (
    <AsideContainer>
      <Title>Aside Title</Title>
    </AsideContainer>
  )
}

const AsideRouter = withRouter(Aside)

export { Aside, AsideRouter }
