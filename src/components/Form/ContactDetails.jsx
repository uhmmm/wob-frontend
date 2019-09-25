import React from 'react'
import styled from '@emotion/styled'
import { groupBy } from 'lodash'

import { colors, type } from '../../styles'

const ContactDetailsContainer = styled.div({})
const FormField = styled.div({})
const FormInput = styled.input({
  height: '3rem',
  padding: '0.5rem',
  border: `1px solid ${colors.blackestTransparent16}`,
  borderRadius: '5px',
  outline: 'unset',
  ...type.content.medium,
  color: colors.darkGrey
})

const ContactDetails = ({ elements }) => {
  let formItems = Object.values(groupBy(elements, 'partOf'))
  return (
    <ContactDetailsContainer>
      {formItems.map((formItem, formItemKey) => {
        return (
          <FormField key={formItemKey}>
            {formItem.map(formEl => {
              switch (formEl.type) {
                case 'inputSmall':
                  return <FormInput key={formEl.elementId}></FormInput>
                default:
                  return null
              }
            })}
          </FormField>
        )
      })}
    </ContactDetailsContainer>
  )
}

export { ContactDetails }
