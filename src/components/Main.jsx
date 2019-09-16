import React from 'react'
import styled from '@emotion/styled'
import { Switch, Route } from 'react-router-dom'

import { type } from '../styles'

const MainContainer = styled.main({})

const Title = styled.h1({ ...type.title.medium })

const Main = () => (
  <MainContainer>
    <Title>Main Title</Title>
  </MainContainer>
)

const MainRouter = () => (
  <Switch>
    <Route path="/form/start"></Route>
    <Route path="/form/contact-details"></Route>
    <Route path="/form/role"></Route>
    <Route path="/form/institute"></Route>
    <Route path="/form/subject"></Route>
    <Route path="/form/quantity"></Route>
    <Route path="/form/specific"></Route>
    <Route path="/form/specific-types"></Route>
    <Route path="/form/everything"></Route>
    <Route path="/form/everything-types"></Route>
    <Route path="/form/finish"></Route>
    <Route path="/form/extras"></Route>
  </Switch>
)

export { Main, MainRouter }
