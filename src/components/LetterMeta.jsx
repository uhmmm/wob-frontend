import React from 'react'
import styled from '@emotion/styled'

const LetterMetaContainer = styled.div({})

const LetterMeta = ({ letterId, letter }) => (
  <LetterMetaContainer>{letterId}</LetterMetaContainer>
)

export { LetterMeta }
