import React from 'react'
import styled from '@emotion/styled'
import { Switch, Route, Redirect } from 'react-router-dom'

import { LetterOverlay } from './LetterOverlay'
import { ToggleBar } from './ToggleBar'
import { Pagination } from './Pagination'
import { MainRouter } from './Main/Main'
import { ImagesRouter } from './Images/Images'
import { AsideRouter } from './Aside/Aside'
import { Logo } from '../Logo/Logo'

import { colors } from '../../styles'

const FormLayoutContainer = styled.main({
  width: '100vw',
  height: '100vh',
  display: 'flex'
})
const LeftContainer = styled.section({
  width: '50%',
  height: '100%',
  padding: '8rem 8rem 12rem 8rem',
  background: colors.yellow
})
const LeftSectionHeader = styled.div({
  display: 'flex',
  width: '100%',
  padding: '0 0 4rem 0'
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

const FormLayout = () => (
  <FormLayoutContainer>
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
      <Pagination />
    </RightContainer>
  </FormLayoutContainer>
)

const FormRouter = () => (
  <Switch>
    <Route path="/form/start" component={FormLayout} />
    <Route path="/form/contact-details" component={FormLayout} />
    <Route path="/form/role" component={FormLayout} />
    <Route path="/form/institute" component={FormLayout} />
    <Route path="/form/subject" component={FormLayout} />
    <Route path="/form/quantity" component={FormLayout} />
    <Route path="/form/specific" component={FormLayout} />
    <Route path="/form/specific-types" component={FormLayout} />
    <Route path="/form/everything" component={FormLayout} />
    <Route path="/form/everything-types" component={FormLayout} />
    <Route path="/form/finish" component={FormLayout} />
    <Route path="/form/extras" component={FormLayout} />
    <Route path="/form/not-found" component={FormLayout} />
    <Redirect to="/form/not-found" />
  </Switch>
)

export { FormLayout, FormRouter }
