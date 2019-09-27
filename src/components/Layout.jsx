import React from 'react'
import { css, Global } from '@emotion/core'
import styled from '@emotion/styled'
import { Route, Switch, Redirect } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'

import { globalStyles } from '../styles'

import { FormRouter } from './Form'
import { PageRouter } from './Page'

const LayoutContainer = styled.div({})

const Layout = () => (
  <LayoutContainer>
    <Global styles={css(globalStyles)} />
    <Helmet>
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/apple-touch-icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicon-16x16.png"
      />
      <meta name="msapplication-TileColor" content="#da532c" />
      <meta name="theme-color" content="#ffffff" />
    </Helmet>
    <Switch>
      <Route path="/form" component={FormRouter} />
      <Route path="/page" component={PageRouter} />
      <Redirect to="/page" />
    </Switch>
  </LayoutContainer>
)

export { Layout }
