import React from 'react'
import styled from '@emotion/styled'
import { groupBy } from 'lodash'

import { InputField } from './InputField'

// import { colors, type } from '../../styles'

const ContactDetailsContainer = styled.form({})

const ContactDetails = ({ elements }) => {
  let formElementGroups = Object.values(groupBy(elements, 'partOf'))
  return (
    <ContactDetailsContainer>
      {formElementGroups.map((elements, elementsKey) => {
        return <InputField key={elementsKey} elements={elements} />
      })}
    </ContactDetailsContainer>
  )
}

export { ContactDetails }
