import React from 'react'
import styled from '@emotion/styled'
import { Switch, Route } from 'react-router-dom'
import { connect } from 'react-redux'

import { Logo } from './Logo/Logo'
import { ElementResolver } from './ElementResolver'

import { getGroupedElementsBySlug } from '../reducers/elements'

const MainContainer = styled.main({
  display: 'flex',
  flexDirection: 'column',
  height: '100%'
})

const LogoContainer = styled.div({
  margin: '0 0 4rem 0'
})

const Main = ({ groupedElements }) => {
  return (
    <MainContainer>
      <LogoContainer>
        <Logo />
      </LogoContainer>
      {groupedElements &&
        groupedElements.base.map(el => {
          return <ElementResolver key={el.elementId} el={el}></ElementResolver>
        })}
    </MainContainer>
  )
}

const mapStateToProps = (state, { match }) => {
  return {
    groupedElements: getGroupedElementsBySlug(state, {
      slug: match.params.formSlug
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
