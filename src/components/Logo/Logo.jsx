import React from 'react'
import styled from '@emotion/styled'
import { Link } from 'react-router-dom'

import logo from './logo.svg'

const LogoContainer = styled(Link)({})
const LogoImg = styled.img({ height: '4rem' })

const Logo = () => (
  <LogoContainer to="/">
    <LogoImg src={logo} />
  </LogoContainer>
)

export { Logo }
