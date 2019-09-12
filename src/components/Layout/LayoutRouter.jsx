import React from 'react'
import { css, Global } from '@emotion/core'
import styled from '@emotion/styled'
import { Route, Switch } from 'react-router-dom'

import { globalStyles } from '../../styles'

import { LayoutForm } from './LayoutForm'
import { LayoutPage } from './LayoutPage'

const LayoutContainer = styled.div({})

const LayoutRouter = () => (
  <LayoutContainer>
    <Global styles={css(globalStyles)} />
    <Switch>
      <Route path="/form" component={LayoutForm} />
      <Route path="/" component={LayoutPage} />
    </Switch>
  </LayoutContainer>
)

export { LayoutRouter }
