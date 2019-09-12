import React from 'react'
import styled from '@emotion/styled'

const LetterContainer = styled.div({})

const StoredLetter = ({ letterId, letter }) => (
  <LetterContainer>{letterId}</LetterContainer>
)

export { StoredLetter }
