import React from 'react'
import styled from '@emotion/styled'

import { type, colors } from '../styles'

const Input = styled.input({
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
const InputGroup = styled.div({})

const InputField = ({ elements }) => {
  const label = elements.find(el => {
    return el.type === 'label'
  })
  const required = elements.find(el => {
    return el.type === 'required'
  })
  const input = elements.find(el => {
    return el.type === 'inputLarge' || 'inputSmall'
  })
  return (
    <InputGroup size={input.details && input.details[0]}>
      <Label>
        <span>{label.text}</span>
        <span> - {required.text}</span>
        <Input placeholder={input.text} />
      </Label>
    </InputGroup>
  )
}

export { InputField }
