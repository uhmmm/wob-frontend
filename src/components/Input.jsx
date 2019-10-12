import React from 'react'
import styled from '@emotion/styled'

import { type, colors } from '../styles'

const InputElement = styled.input({
  width: '100%',
  padding: '0.5rem 1rem',
  margin: '0 0 1rem 0 ',
  border: `1px solid ${colors.blackestTransparent16}`,
  borderRadius: '5px',
  outline: 'unset',
  ...type.content.medium,
  color: colors.darkGrey
})

const Label = styled.label({})

const Input = ({ element }) => {
  return <InputElement placeholder={element.text} />
}

export { Input, Label }
