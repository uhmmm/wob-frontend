import React from 'react'
import { css, Global } from '@emotion/core'
import styled from '@emotion/styled'
import { Route, Switch } from 'react-router-dom'

import { globalStyles } from '../styles'

import { FormLayout } from './FormLayout'
import { PageLayout } from './PageLayout'

const LayoutContainer = styled.div({})

const Layout = () => (
  <LayoutContainer>
    <Global styles={css(globalStyles)} />
    <Switch>
      <Route path="/form" component={FormLayout} />
      <Route path="/" component={PageLayout} />
    </Switch>
  </LayoutContainer>
)

export { Layout }
