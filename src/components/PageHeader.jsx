import React from 'react'
import styled from '@emotion/styled'
import { connect } from 'react-redux'
import { withRouter } from 'react-router'

import { FormElementResolverConnected } from './FormElementResolver'
import { Logo } from './Logo/Logo'

import { getElementsByProperty } from '../reducers/formElements'
import { getRouteBySlug } from '../reducers/routes'

import { colors } from '../styles'

const HeaderContainer = styled.div({
  position: 'absolute',
  padding: '8rem',
  top: 0,
  margin: '10rem 0',
  height: 'calc(100% - 20rem)',
  background: colors.white,
  width: 'calc(60% - 8rem)'
})

const LogoContainer = styled.div({
  position: 'absolute',
  top: '-2rem',
  margin: '0 0 0rem 0'
})

const Header = ({ rootElementId }) => {
  return (
    <HeaderContainer>
      <LogoContainer>
        <Logo />
      </LogoContainer>
      <FormElementResolverConnected elementId={rootElementId} />
    </HeaderContainer>
  )
}

const mapStateToProps = (state, { match }) => {
  let route = getRouteBySlug(state, { slug: match.params.pageSlug })
  let rootElement = getElementsByProperty(state, {
    routeId: [route.routeId],
    partOf: ['pageHeader'],
    type: 'root'
  })
  return {
    rootElementId: rootElement && rootElement[0].elementId
  }
}

const HeaderConnected = connect(mapStateToProps)(Header)

const HeaderRouted = withRouter(HeaderConnected)

export { HeaderRouted }
