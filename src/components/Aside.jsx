import React, { useEffect } from 'react'
import styled from '@emotion/styled'
import { Switch, Route } from 'react-router-dom'
import { connect } from 'react-redux'

import { AsideCloseButton } from './AsideCloseButton/AsideCloseButton'
import { FormElementResolverConnected } from './FormElementResolver'

import { getElementsByProperty } from '../reducers/formElements'
import { getRouteBySlug } from '../reducers/routes'
import { closeLetter } from '../actions/ui'

import { colors } from '../styles'

const AsideContainer = styled.aside({
  position: 'absolute',
  top: '16rem',
  left: 0,
  width: '40rem',
  padding: '4rem',
  height: 'calc(100vh - 16rem)',
  background: colors.darkestWhite,
  boxShadow: '1px 1p',
  borderRadius: '0 10px 0 0',
  overflow: 'scroll'
})

const Aside = ({ elementId, closeLetter }) => {
  useEffect(() => {
    closeLetter()
  }, [closeLetter])
  return (
    <AsideContainer>
      <AsideCloseButton></AsideCloseButton>
      <FormElementResolverConnected elementId={elementId} />
    </AsideContainer>
  )
}

const mapStateToProps = (state, { match }) => {
  let route = getRouteBySlug(state, { slug: match.params.asideSlug })
  let rootElement = getElementsByProperty(state, {
    routeId: [route.routeId],
    partOf: ['main'],
    type: 'root'
  })[0]
  return {
    elementId: rootElement && rootElement.elementId
  }
}

const AsideConnected = connect(
  mapStateToProps,
  { closeLetter }
)(Aside)

const AsideRouter = () => {
  return (
    <Switch>
      <Route
        path="/letter/:letterId/form/:formSlug/aside/:asideSlug"
        component={AsideConnected}
      ></Route>
    </Switch>
  )
}

export { Aside, AsideRouter }
