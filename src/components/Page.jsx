import React from 'react'
import styled from '@emotion/styled'
import { Switch, Route } from 'react-router'

import { LetterMetaList } from './LetterMetaList'
import { HeaderConnected } from './PageHeader'
import { FooterConnected } from './PageFooter'
import { ContentAreaConnected } from './ContentArea'

const PageLayoutContainer = styled.main({})

const PageLayout = ({ elements, routeId }) => (
  <PageLayoutContainer>
    <HeaderConnected />
    <ContentAreaConnected />
    <LetterMetaList />
    <FooterConnected />
  </PageLayoutContainer>
)

const PageRouter = () => {
  return (
    <Switch>
      <Route to="/page/:pageSlug" component={PageLayout} />
    </Switch>
  )
}

export { PageLayout, PageRouter }
