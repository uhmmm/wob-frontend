import React from 'react'
import styled from '@emotion/styled'

import { LetterOverlay } from './Letter/LetterOverlay'
import { ToggleBar } from './ToggleBar'
import { Pagination } from './Pagination'
import { MainRouter } from './Main/Main'
import { ImagesRouted } from './Images/Images'
import { AsideRouter } from './Aside/Aside'

const FormLayoutContainer = styled.div({})

const FormLayout = () => (
  <FormLayoutContainer>
    <MainRouter />
    <ImagesRouted />
    <LetterOverlay />
    <ToggleBar />
    <AsideRouter />
    <Pagination />
  </FormLayoutContainer>
)

export { FormLayout }
