import React from 'react'
import styled from '@emotion/styled'
import { Link } from 'react-router-dom'

import { type } from '../../styles'

const HeaderContainer = styled.main({})

const Title = styled.h1({ ...type.title.large })
const StyledLink = styled(Link)({
  ...type.content.large
})

const Header = () => (
  <HeaderContainer>
    <Title>Header</Title>
    <StyledLink to="/form/start">Start je Wob-verzoek</StyledLink>
  </HeaderContainer>
)

export { Header }
