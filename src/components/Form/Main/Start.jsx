import React from 'react'
import styled from '@emotion/styled'

import { type } from '../../../styles'

import { MainLayout } from './Main'

const StartContainer = styled.main({})

const Title = styled.h1({ ...type.title.medium })

const Start = () => (
  <MainLayout>
    <StartContainer>
      <Title>Main Start</Title>
    </StartContainer>
  </MainLayout>
)

export { Start }
