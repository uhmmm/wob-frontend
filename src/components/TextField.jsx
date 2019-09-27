import React from 'react'
import styled from '@emotion/styled'
import { connect } from 'react-redux'
import { getElementsByProperty } from '../reducers/elements'

import { type, colors } from '../styles'

const TextArea = styled.textarea({
  width: '100%',
  padding: '0.5rem 1rem',
  margin: '0 0 1rem 0 ',
  minHeight: '8rem',
  border: `1px solid ${colors.blackestTransparent16}`,
  borderRadius: '5px',
  outline: 'unset',
  ...type.content.medium,
  color: colors.darkGrey
})

const Label = styled.label({})
const TextGroup = styled.div({})

const TextField = ({ elements }) => {
  if (elements) {
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
      <TextGroup size={input.details && input.details[0]}>
        <Label>
          <span>{label.text}</span>
          <span> - {required.text}</span>
          <TextArea placeholder={input.text} />
        </Label>
      </TextGroup>
    )
  } else {
    return null
  }
}

const mapStateToProps = (state, { routeId }) => {
  return {
    elements: getElementsByProperty(state, {
      partOf: ['formOnderwerp']
    })
  }
}

const TextFieldConnected = connect(mapStateToProps)(TextField)

export { TextFieldConnected }
