import React from 'react'
import styled from '@emotion/styled'

import { type, colors } from '../../styles'

import infoIcon from './icon-info.svg'

const Background = styled.span(({ size, bgInversed, hOrient, vOrient }) => ({
  position: 'absolute',
  width: `${size}rem`,
  height: `${size}rem`,
  left: hOrient === 'positive' ? `${0.08 * size}rem` : `-${0.08 * size}rem`,
  top: vOrient === 'positive' ? `${0.08 * size}rem` : `-${0.08 * size}rem`,
  background: !bgInversed ? colors.darkerYellow : colors.white,
  borderRadius: '100%'
}))

const BubbleContainer = styled.span(({ size, bgInversed }) => ({
  flex: `0 0 auto`,
  position: 'relative',
  display: 'inline-flex',
  width: `${size}rem`,
  height: `${size}rem`,
  justifyContent: 'center',
  alignItems: 'center',
  cursor: 'pointer',
  '&:hover': {
    [Background]: {
      background: bgInversed ? colors.darkerYellow : colors.white
    }
  }
}))

const Border = styled.span(({ size }) => ({
  position: 'absolute',
  width: `${size}rem`,
  height: `${size}rem`,
  border: `1px solid ${colors.darkestYellow}`,
  borderRadius: '100%'
}))

const Label = styled.span({
  ...type.navigation.mediumEmphasis,
  position: 'relative',
  color: colors.darkestYellow
})

const Img = styled.img(({ size }) => ({
  position: 'relative',
  width: `${size - 0.5 * size}rem`,
  height: `${size - 0.5 * size}rem`
}))

const Bubble = ({
  size = 2,
  bgInversed,
  vOrient = 'positive',
  hOrient = 'positive',
  number,
  icon
}) => (
  <BubbleContainer size={size} bgInversed={bgInversed}>
    <Background
      size={size}
      bgInversed={bgInversed}
      vOrient={vOrient}
      hOrient={hOrient}
    />
    <Border size={size} />
    {number && <Label>{number}</Label>}
    {icon && <Img src={icon} size={size} />}
  </BubbleContainer>
)

const InfoBubble = ({
  size = 2,
  bgInversed = true,
  vOrient = 'positive',
  hOrient = 'positive',
  icon = infoIcon
}) => (
  <Bubble
    size={size}
    bgInversed={bgInversed}
    vOrient={vOrient}
    hOrient={hOrient}
    icon={icon}
  />
)

export { Bubble, InfoBubble }
