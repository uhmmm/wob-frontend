import React from 'react'
import styled from '@emotion/styled'
import { Switch, Route, Redirect } from 'react-router-dom'

import { Start } from './Start'

import logo from './logo.png'

const MainLayoutContainer = styled.main({})
const Logo = styled.img({})

const MainLayout = ({ children }) => (
  <MainLayoutContainer>
    <Logo src={logo} />
    {children}
  </MainLayoutContainer>
)

const MainRouter = () => (
  <Switch>
    <Route path="/form/start" component={Start} />
    <Route path="/form/role" component={MainLayout} />
    <Route path="/form/institute" component={MainLayout} />
    <Route path="/form/subject" component={MainLayout} />
    <Route path="/form/quantity" component={MainLayout} />
    <Route path="/form/specific" component={MainLayout} />
    <Route path="/form/specific-types" component={MainLayout} />
    <Route path="/form/everything" component={MainLayout} />
    <Route path="/form/everything-types" component={MainLayout} />
    <Route path="/form/finish" component={MainLayout} />
    <Route path="/form/extras" component={MainLayout} />
    <Route path="/form/not-found" component={MainLayout} />
    <Redirect to="/form/not-found" />
  </Switch>
)

export { MainLayout, MainRouter }
