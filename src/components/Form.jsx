import React from 'react'
import styled from '@emotion/styled'
import { Global, css } from '@emotion/core'
import { Helmet } from 'react-helmet-async'
import { connect } from 'react-redux'
import { Switch, Route } from 'react-router-dom'

import { Letter } from './Letter/Letter'
import { ToggleBar } from './ToggleBar'
import { PaginationRouted } from './Pagination/Pagination'
import { MainRouter } from './Main'
import { ImagesRouted } from './Images/FormImages'
import { AsideRouter } from './Aside'
import { Sidebar } from './Sidebar'

import { getRouteBySlug } from '../reducers/routes'

const FormLayoutContainer = styled.main({
  position: 'relative',
  width: '100vw',
  height: '100vh',
  display: 'flex'
})

const RightContainer = styled.section({
  position: 'relative',
  height: '100%',
  padding: '8rem 8rem 12rem 8rem'
})

const RightSectionHeader = styled.div({
  display: 'flex',
  justifyContent: 'flex-end',
  width: '100%'
})

const FormLayout = ({ route }) => (
  <FormLayoutContainer>
    <Global styles={css({ body: { overflow: 'hidden' } })} />
    <Helmet>
      <title>{`WtW - ${route && route.title}`}</title>
    </Helmet>
    <Sidebar />
    <MainRouter />
    <RightContainer>
      <RightSectionHeader>
        <ToggleBar />
      </RightSectionHeader>
      <ImagesRouted />
      <AsideRouter />
      <Letter />
      <PaginationRouted />
    </RightContainer>
  </FormLayoutContainer>
)

const mapStateToProps = (state, { match }) => {
  return {
    route: getRouteBySlug(state, { slug: match.params.formSlug })
  }
}

const FormLayoutConnected = connect(mapStateToProps)(FormLayout)

const FormRouter = () => (
  <Switch>
    <Route path="/form/:formSlug" component={FormLayoutConnected} />
  </Switch>
)

export { FormRouter }
