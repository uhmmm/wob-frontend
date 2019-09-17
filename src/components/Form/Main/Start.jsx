import React from 'react'
import styled from '@emotion/styled'

import { type } from '../../../styles'

const StartContainer = styled.main({})

const Title = styled.h1({ ...type.title.medium })

const Start = () => (
  <StartContainer>
    <Title>In drie stappen naar je Wob-verzoek</Title>
  </StartContainer>
)

export { Start }
