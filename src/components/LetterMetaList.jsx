import React from 'react'
import styled from '@emotion/styled'

import { LetterMeta } from './LetterMeta'

const LetterMetaListContainer = styled.div({})

const LetterMetaList = ({ letters = [{ id: 1 }, { id: 2 }] }) => (
  <LetterMetaListContainer>
    {letters.map(letter => (
      <LetterMeta key={letter.id} letterId={letter.id} />
    ))}
  </LetterMetaListContainer>
)

export { LetterMetaList }
