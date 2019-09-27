import React from 'react'
import styled from '@emotion/styled'

import { LetterMeta } from './LetterMeta'

import { type } from '../styles'

const LetterMetaListContainer = styled.div({})
const Title = styled.h1({ ...type.title.large })

const LetterMetaList = ({ letters = [{ id: 1 }, { id: 2 }] }) => (
  <LetterMetaListContainer>
    <Title>Letterlist</Title>
    {letters.map(letter => (
      <LetterMeta key={letter.id} letterId={letter.id} />
    ))}
  </LetterMetaListContainer>
)

export { LetterMetaList }
