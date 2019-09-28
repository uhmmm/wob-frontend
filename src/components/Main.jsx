import React from 'react'
import styled from '@emotion/styled'
import { Switch, Route } from 'react-router-dom'
import { connect } from 'react-redux'

import { Logo } from './Logo/Logo'
import { ElementResolver } from './ElementResolver'

import { getElementsByProperty } from '../reducers/elements'
import { getRouteBySlug } from '../reducers/routes'

const MainContainer = styled.main({
  display: 'flex',
  flexDirection: 'column',
  height: '100%'
})

const LogoContainer = styled.div({
  margin: '0 0 4rem 0'
})

const Main = ({ elements }) => {
  return (
    <MainContainer>
      <LogoContainer>
        <Logo />
      </LogoContainer>
      {elements &&
        elements.map(el => {
          return <ElementResolver key={el.elementId} el={el}></ElementResolver>
        })}
    </MainContainer>
  )
}

const mapStateToProps = (state, { match }) => {
  let route = getRouteBySlug(state, { slug: match.params.formSlug })
  return {
    elements: getElementsByProperty(state, {
      routeId: [route.routeId],
      partOf: ['base']
    })
  }
}

const MainConnected = connect(mapStateToProps)(Main)

const MainRouter = () => {
  return (
    <Switch>
      <Route path="/form/:formSlug" component={MainConnected}></Route>
    </Switch>
  )
}

export { MainRouter }
