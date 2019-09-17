import React from 'react'
import styled from '@emotion/styled'

import { type } from '../../styles'

const HeaderContainer = styled.main({})

const Title = styled.h1({ ...type.title.large })

const Header = () => (
  <HeaderContainer>
    <Title>Header</Title>
  </HeaderContainer>
)

export { Header }
