import React from 'react'
import styled from '@emotion/styled'

import { colors } from '../../styles'
import closeArrow from './close-arrow.svg'

const Button = styled.div({
  position: 'absolute',
  top: '0',
  right: '0',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: '4rem',
  height: '4rem',
  background: colors.yellow,
  outline: 'unset',
  borderRadius: '0 10px 0 10px'
})

const Img = styled.img({
  width: '1.5rem'
})

const AsideCloseButton = () => {
  return (
    <Button>
      <Img src={closeArrow}></Img>
    </Button>
  )
}

export { AsideCloseButton }
