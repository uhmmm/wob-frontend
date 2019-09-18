import React from 'react'
import styled from '@emotion/styled'

import { type } from '../../../../styles'

const ContactContainer = styled.main({})
const Title = styled.h1({ ...type.title.medium, margin: '0 0 2rem' })
const Text = styled.h1({ ...type.content.medium, margin: '0 0 2rem' })

const ContactDetails = () => (
  <ContactContainer>
    <Title>Contactgegevens</Title>
    <Text>
      Als je een Wob-verzoek verstuurt, moet de overheid weten van wie het
      verzoek komt en waar hun besluit op je verzoek naartoe moet worden
      gestuurd. Vul daarom hier je contactgegevens in.
    </Text>
  </ContactContainer>
)

export { ContactDetails }
