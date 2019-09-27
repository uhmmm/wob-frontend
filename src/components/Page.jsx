import React from 'react'
import styled from '@emotion/styled'
import { Switch, Route } from 'react-router'

import { LetterMetaList } from './LetterMetaList'
import { HeaderConnected } from './PageHeader'
import { FooterConnected } from './PageFooter'
import { ContentAreaConnected } from './ContentArea'
import { PageImagesRouted } from './Images/PageImages'

const PageLayoutContainer = styled.main({})

const PageLayout = () => (
  <PageLayoutContainer>
    <PageImagesRouted />
    <HeaderConnected />
    <ContentAreaConnected />
    <LetterMetaList />
    <FooterConnected />
  </PageLayoutContainer>
)

const PageRouter = () => {
  return (
    <Switch>
      <Route path="/page/:pageSlug" component={PageLayout} />
    </Switch>
  )
}

export { PageLayout, PageRouter }
