import React from 'react'
import styled from '@emotion/styled'

import { type } from '../styles'

const MainContainer = styled.main({})

const Title = styled.h1({ ...type.title.medium })

const Main = () => (
  <MainContainer>
    <Title>Some Title</Title>
  </MainContainer>
)

export { Main }
