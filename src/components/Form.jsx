import React from 'react'
import styled from '@emotion/styled'

import { LetterOverlay } from './LetterOverlay'
import { ToggleBar } from './ToggleBar'
import { Pagination } from './Pagination'
import { Main } from './Main'
import { Images } from './Images'

const FormContainer = styled.div({})

const Form = () => (
  <FormContainer>
    <Main />
    <Images />
    <LetterOverlay />
    <ToggleBar />
    <Pagination />
  </FormContainer>
)

export { Form }
