import React from 'react'
import styled from '@emotion/styled'

import { type, colors } from '../../styles'

const BubbleContainer = styled.div(({ size }) => ({
  flex: `0 0 auto`,
  position: 'relative',
  display: 'flex',
  width: size || '2rem',
  height: size || '2rem',
  justifyContent: 'center',
  alignItems: 'center'
}))

const Background = styled.div(({ size }) => ({
  position: 'absolute',
  width: size || '100%',
  height: size || '100%',
  left: '0.15rem',
  top: '0.15rem',
  background: colors.darkerYellow,
  borderRadius: '100%'
}))

const Border = styled.div(({ size }) => ({
  position: 'absolute',
  width: size || '100%',
  height: size || '100%',
  border: `1px solid ${colors.darkestYellow}`,
  borderRadius: '100%'
}))

const Label = styled.div({
  ...type.navigation.mediumEmphasis,
  position: 'relative',
  color: colors.darkestYellow
})

const Bubble = ({ size, number }) => (
  <BubbleContainer size={size}>
    <Background size={size} />
    <Border size={size} />
    <Label>{number}</Label>
  </BubbleContainer>
)

export { Bubble }
