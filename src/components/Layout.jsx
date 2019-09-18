import React from 'react'
import { css, Global } from '@emotion/core'
import styled from '@emotion/styled'
import { Route, Switch } from 'react-router-dom'

import { globalStyles } from '../styles'

import { FormRouter } from './Form/FormRouter'
import { PageLayout } from './Page/PageLayout'

const LayoutContainer = styled.div({})

const Layout = () => (
  <LayoutContainer>
    <Global styles={css(globalStyles)} />
    <Switch>
      <Route path="/form" component={FormRouter} />
      <Route path="/" component={PageLayout} />
    </Switch>
  </LayoutContainer>
)

export { Layout }
