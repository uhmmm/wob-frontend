import React from 'react'
import styled from '@emotion/styled'
import { groupBy } from 'lodash'

import { colors, type } from '../../styles'

const ContactDetailsContainer = styled.form({})
const FormField = styled.div({})
const FormInput = styled.input({
  width: '100%',
  padding: '0.5rem 1rem',
  margin: '0 0 1rem 0 ',
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
                  return (
                    <FormInput
                      key={formEl.elementId}
                      size={formEl.details[0]}
                      placeholder={formEl.text}
                    ></FormInput>
                  )
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
