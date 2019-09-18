import React from 'react'
import styled from '@emotion/styled'
import { Helmet } from 'react-helmet'

import { LetterOverlay } from './LetterOverlay'
import { ToggleBar } from './ToggleBar'
import { PaginationRouted } from './Pagination/Pagination'
import { MainRouter } from './Main/MainRouter'
import { ImagesRouter } from './Images/Images'
import { AsideRouter } from './Aside/Aside'
import { Logo } from '../Logo/Logo'

import { colors } from '../../styles'
import { formRoutes } from './FormRouter'

const FormLayoutContainer = styled.main({
  position: 'relative',
  width: '100vw',
  height: '100vh',
  display: 'flex'
})

const LeftContainer = styled.section({
  width: '50%',
  height: '100%',
  padding: '8rem 8rem 12rem 8rem',
  background: colors.yellow,
  overflow: 'scroll'
})

const LeftSectionHeader = styled.div({
  display: 'flex',
  width: '100%',
  margin: '0 0 4rem 0'
})

const RightContainer = styled.section({
  width: '50%',
  height: '100%',
  padding: '8rem 8rem 12rem 8rem'
})

const RightSectionHeader = styled.div({
  display: 'flex',
  justifyContent: 'flex-end',
  width: '100%'
})

const FormLayout = ({ match }) => (
  <FormLayoutContainer>
    <Helmet>
      <title>
        {`WtW - ${
          formRoutes.find(route => route.path === match.path).displayName
        }`}
      </title>
    </Helmet>
    <LeftContainer>
      <LeftSectionHeader>
        <Logo />
      </LeftSectionHeader>
      <MainRouter />
    </LeftContainer>
    <RightContainer>
      <RightSectionHeader>
        <ToggleBar />
      </RightSectionHeader>
      <ImagesRouter />
      <AsideRouter />
      <LetterOverlay />
    </RightContainer>
    <PaginationRouted />
  </FormLayoutContainer>
)

export { FormLayout }
