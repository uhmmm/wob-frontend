import React from 'react'
import styled from '@emotion/styled'

import { type } from '../../styles'

const LetterMetaContainer = styled.div({})
const Title = styled.h1({ ...type.title.large })

const LetterMeta = ({ letterId, letter }) => (
  <LetterMetaContainer>
    <Title>Letter: {letterId}</Title>
  </LetterMetaContainer>
)

export { LetterMeta }
