import React from 'react'
import { css, Global } from '@emotion/core'
import styled from '@emotion/styled'
import { Route, Switch } from 'react-router-dom'

import { globalStyles } from '../styles'

import { FormLayout } from './Form/FormLayout'
import { PageLayout } from './Page/PageLayout'

// import { Grid } from './Grid'

const LayoutContainer = styled.div({})

const Layout = () => (
  <LayoutContainer>
    <Global styles={css(globalStyles)} />
    {/* <Grid></Grid> */}
    <Switch>
      <Route path="/form" component={FormLayout} />
      <Route path="/" component={PageLayout} />
    </Switch>
  </LayoutContainer>
)

export { Layout }
