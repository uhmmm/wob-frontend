import React from 'react'
import styled from '@emotion/styled'

import { type, colors } from '../../styles'

const BubbleContainer = styled.div({
  position: 'relative',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: '2rem',
  height: '2rem'
})

const Background = styled.div({
  position: 'absolute',
  left: '0.15rem',
  top: '0.15rem',
  width: '100%',
  height: '100%',
  background: colors.darkerYellow,
  borderRadius: '100%'
})

const Border = styled.div({
  position: 'absolute',
  width: '100%',
  height: '100%',
  border: `1px solid ${colors.darkestYellow}`,
  borderRadius: '100%'
})

const Label = styled.div({
  ...type.navigation.medium,
  position: 'relative',
  color: colors.darkestYellow
})

const Bubble = ({ number }) => (
  <BubbleContainer>
    <Background />
    <Border />
    <Label>{number}</Label>
  </BubbleContainer>
)

export { Bubble }
