import React from 'react'
import styled from '@emotion/styled'

import { colors, type } from '../../styles'

const ToggleBarContainer = styled.div({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: '3rem',
  padding: '0.75rem 1.5rem',
  background: colors.yellow,
  borderRadius: '10px',
  boxShadow: `${colors.blackestTransparent16} 1px 1px 2px`
})

const Label = styled.label({
  padding: '0 0 0 1rem',
  ...type.content.medium
})

const ToggleContainer = styled.div({
  position: 'relative',
  display: 'flex',
  alignItems: 'center'
})
const Background = styled.div({
  width: '3rem',
  height: '1rem',
  background: colors.darkerYellow,
  borderRadius: '10px'
})
const Knob = styled.div({
  position: 'absolute',
  width: '1.5rem',
  height: '1.5rem',
  background: colors.white,
  borderRadius: '100%'
})

const Toggle = ({ active }) => (
  <ToggleContainer>
    <Background />
    <Knob />
  </ToggleContainer>
)

const ToggleBar = () => (
  <ToggleBarContainer>
    <Toggle />
    <Label>Toon Brief</Label>
  </ToggleBarContainer>
)

export { ToggleBar }
