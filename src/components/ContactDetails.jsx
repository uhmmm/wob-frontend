import React from 'react'
import styled from '@emotion/styled'
import { groupBy } from 'lodash'
import { connect } from 'react-redux'
import { getElementsByProperty } from '../reducers/elements'

import { InputField } from './InputField'

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

const mapStateToProps = (state, { routeId }) => {
  return {
    elements: getElementsByProperty(state, {
      partOf: ['formContactDetails'],
      routeId
    })
  }
}

const ContactDetailsConnected = connect(mapStateToProps)(ContactDetails)

export { ContactDetailsConnected }
