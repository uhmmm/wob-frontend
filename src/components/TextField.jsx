import React from 'react'
import styled from '@emotion/styled'

import { type, colors } from '../styles'

const TextArea = styled.textarea({
  width: '100%',
  padding: '0.5rem 1rem',
  margin: '0 0 1rem 0 ',
  minHeight: '12rem',
  border: `1px solid ${colors.blackestTransparent16}`,
  borderRadius: '5px',
  outline: 'unset',
  resize: 'none',
  ...type.content.medium,
  color: colors.darkGrey
})

const TextField = ({ element }) => {
  return <TextArea placeholder={element.text} />
}

export { TextField }
