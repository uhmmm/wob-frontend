import React from 'react'
import styled from '@emotion/styled'
import { Helmet } from 'react-helmet-async'
import { connect } from 'react-redux'
import { Switch, Route } from 'react-router-dom'

import { LetterOverlay } from './LetterOverlay'
import { ToggleBar } from './ToggleBar'
import { PaginationRouted } from './Pagination/Pagination'
import { MainRouter } from './Main'
import { ImagesRouted } from './Images/Images'
import { AsideRouter } from './Aside'

import { colors } from '../styles'
import { getRouteBySlug } from '../reducers/routes'

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

const RightContainer = styled.section({
  position: 'relative',
  width: '50%',
  height: '100%',
  padding: '8rem 8rem 12rem 8rem',
  overflow: 'hidden'
})

const RightSectionHeader = styled.div({
  display: 'flex',
  justifyContent: 'flex-end',
  width: '100%'
})

const FormLayout = ({ route }) => (
  <FormLayoutContainer>
    <Helmet>
      <title>{`WtW - ${route && route.title}`}</title>
    </Helmet>
    <LeftContainer>
      <MainRouter />
    </LeftContainer>
    <RightContainer>
      <RightSectionHeader>
        <ToggleBar />
      </RightSectionHeader>
      <ImagesRouted />
      <AsideRouter />
      <LetterOverlay />
    </RightContainer>
    <PaginationRouted />
  </FormLayoutContainer>
)

const mapStateToProps = (state, { match }) => {
  return {
    route: getRouteBySlug({ state, slug: match.params.formSlug })
  }
}

const FormLayoutConnected = connect(mapStateToProps)(FormLayout)

const FormRouter = () => (
  <Switch>
    <Route path="/form/:formSlug" component={FormLayoutConnected} />
  </Switch>
)

export { FormRouter }
