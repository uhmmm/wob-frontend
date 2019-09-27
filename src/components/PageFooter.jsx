import React from 'react'
import styled from '@emotion/styled'

import { type } from '../styles'

const FooterContainer = styled.main({})
const Title = styled.h1({ ...type.title.large })

const Footer = () => (
  <FooterContainer>
    <Title>Footer</Title>
  </FooterContainer>
)

export { Footer }
