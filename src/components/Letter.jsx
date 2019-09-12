import React from 'react'
import styled from '@emotion/styled'

const LetterContainer = styled.div({})

const Letter = ({ letterId, letter }) => (
  <LetterContainer>{letterId}</LetterContainer>
)

export { Letter }
