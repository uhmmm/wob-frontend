import React from 'react'
import { css, Global } from '@emotion/core'
import styled from '@emotion/styled'
import { Route, Switch } from 'react-router-dom'

import { globalStyles } from '../styles'

import { Form } from './Form'
import { Page } from './Page'

const LayoutContainer = styled.div({})

const Layout = () => (
  <LayoutContainer>
    <Global styles={css(globalStyles)} />
    <Switch>
      <Route path="/form" component={Form} />
      <Route path="/" component={Page} />
    </Switch>
  </LayoutContainer>
)

export { Layout }
