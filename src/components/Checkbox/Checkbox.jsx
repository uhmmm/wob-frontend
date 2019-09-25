import React, { useState } from 'react'
import styled from '@emotion/styled'

import checkMarkIcon from './checkMark.svg'
import { colors } from '../../styles'

const Background = styled.div({
  position: 'absolute',
  top: '0.25rem',
  left: '0.25rem',
  width: '100%',
  height: '100%',
  background: colors.darkerYellow,
  borderRadius: '5px'
})

const Border = styled.div({
  position: 'absolute',
  width: '100%',
  height: '100%',
  border: `solid 1px ${colors.darkestYellow}`,
  borderRadius: '5px'
})

const CheckboxContainer = styled.div({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  position: 'relative',
  width: '2rem',
  height: '2rem',
  margin: '0.5rem 0 1rem',
  cursor: 'pointer',
  '&:hover': {
    [Background]: {
      background: colors.white
    }
  }
})

const CheckMarkIcon = styled.img({
  position: 'relative',
  height: '1rem',
  width: 'auto'
})

const Checkbox = () => {
  let [checked, setChecked] = useState(false)
  return (
    <CheckboxContainer onClick={() => setChecked(!checked)}>
      <Background />
      <Border />
      {checked && <CheckMarkIcon src={checkMarkIcon} />}
    </CheckboxContainer>
  )
}
export { Checkbox }