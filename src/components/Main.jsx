import React from 'react'
import styled from '@emotion/styled'
import { Switch, Route } from 'react-router-dom'
import { connect } from 'react-redux'

import { Logo } from './Logo/Logo'
import { ElementResolver } from './ElementResolver'

import { getElementsByProperty } from '../reducers/formElements'
import { getRouteBySlug } from '../reducers/routes'

import { colors } from '../styles'

const MainContainer = styled.main({
  flex: '0 0 calc(50vw - 4rem)',
  display: 'flex',
  flexDirection: 'column',
  height: '100%',
  padding: '8rem 8rem 12rem 4rem',
  background: colors.yellow
})

const LogoContainer = styled.div({
  margin: '0 0 4rem 0'
})

const Main = ({ elements }) => {
  return elements.length > 0 ? (
    <MainContainer>
      <LogoContainer>
        <Logo />
      </LogoContainer>
      {elements &&
        elements.map(el => {
          return <ElementResolver key={el.elementId} el={el}></ElementResolver>
        })}
    </MainContainer>
  ) : null
}

const mapStateToProps = (state, { match }) => {
  let route = getRouteBySlug(state, { slug: match.params.formSlug })
  return {
    elements: getElementsByProperty(state, {
      routeId: [route.routeId],
      partOf: ['main']
    })
  }
}

const MainConnected = connect(mapStateToProps)(Main)

const MainRouter = () => {
  return (
    <Switch>
      <Route
        path="/letter/:letterId/form/:formSlug"
        component={MainConnected}
      ></Route>
    </Switch>
  )
}

export { MainRouter }
