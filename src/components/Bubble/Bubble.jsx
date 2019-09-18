import React from 'react'
import styled from '@emotion/styled'

import { type, colors } from '../../styles'

const BubbleContainer = styled.div(({ size }) => ({
  flex: `0 0 auto`,
  position: 'relative',
  display: 'flex',
  width: `${size}rem`,
  height: `${size}rem`,
  justifyContent: 'center',
  alignItems: 'center'
}))

const Background = styled.div(({ size, inversed, hOrient, vOrient }) => ({
  position: 'absolute',
  width: `${size}rem`,
  height: `${size}rem`,
  left: hOrient === 'positive' ? `${0.08 * size}rem` : `-${0.08 * size}rem`,
  top: vOrient === 'positive' ? `${0.08 * size}rem` : `-${0.08 * size}rem`,
  background: !inversed ? colors.darkerYellow : colors.white,
  borderRadius: '100%'
}))

const Border = styled.div(({ size }) => ({
  position: 'absolute',
  width: `${size}rem`,
  height: `${size}rem`,
  border: `1px solid ${colors.darkestYellow}`,
  borderRadius: '100%'
}))

const Label = styled.div({
  ...type.navigation.mediumEmphasis,
  position: 'relative',
  color: colors.darkestYellow
})

const Bubble = ({
  size = 2,
  number,
  bgInversed,
  vOrient = 'positive',
  hOrient = 'positive'
}) => (
  <BubbleContainer size={size}>
    <Background
      size={size}
      inversed={bgInversed}
      vOrient={vOrient}
      hOrient={hOrient}
    />
    <Border size={size} />
    <Label>{number}</Label>
  </BubbleContainer>
)

export { Bubble }
