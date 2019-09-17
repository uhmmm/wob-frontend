import React from 'react'
import styled from '@emotion/styled'
import { Link } from 'react-router-dom'

import { type } from '../../styles'

const HeaderContainer = styled.main({})

const Title = styled.h1({ ...type.title.large })

const Header = () => (
  <HeaderContainer>
    <Title>Header</Title>
    <Link to="/form/start">Start je Wob-verzoek</Link>
  </HeaderContainer>
)

export { Header }
