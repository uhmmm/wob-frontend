import React from 'react'
import styled from '@emotion/styled'

import { type } from '../../../styles'

const StartContainer = styled.main({})

const Title = styled.h1({ ...type.title.medium })
const Text = styled.h1({ paddingTop: '2rem', ...type.content.medium })

const Start = () => (
  <StartContainer>
    <Title>In drie stappen naar je Wob-verzoek</Title>
    <Text>
      Kun je de documenten op een andere manier in handen krijgen, bijvoorbeeld
      door het gewoon te vragen of door ze ergens anders te zoeken?
    </Text>
  </StartContainer>
)

export { Start }
