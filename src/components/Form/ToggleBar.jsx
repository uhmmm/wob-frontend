import React, { useState } from 'react'
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
  ...type.content.small
})

const ToggleContainer = styled.div({
  position: 'relative',
  display: 'flex',
  alignItems: 'center'
})
const Background = styled.div(({ active }) => {
  return {
    width: '3rem',
    height: '1rem',
    background: active ? colors.white : colors.darkerYellow,
    borderRadius: '10px'
  }
})

const Knob = styled.div(({ active }) => ({
  position: 'absolute',
  width: '1.5rem',
  height: '1.5rem',
  left: active ? '1.5rem' : '0',
  background: colors.white,
  borderRadius: '100%',
  transition: 'left 0.1s ease'
}))

const Toggle = ({ handler, active }) => {
  return (
    <ToggleContainer onClick={handler}>
      <Background active={active} />
      <Knob active={active} />
    </ToggleContainer>
  )
}

const ToggleBar = () => {
  const [active, setActive] = useState(false)
  const handler = () => {
    setActive(!active)
  }
  return (
    <ToggleBarContainer>
      <Toggle handler={handler} active={active} />
      <Label>Toon Brief</Label>
    </ToggleBarContainer>
  )
}

export { ToggleBar }
