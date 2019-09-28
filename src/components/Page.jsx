import React from 'react'
import styled from '@emotion/styled'
import { Switch, Route } from 'react-router'

import { LetterMetaList } from './LetterMetaList'
import { HeaderRouted } from './PageHeader'
import { FooterConnected } from './PageFooter'
import { PageContentAreaConnected } from './PageContentArea'
import { PageImagesRouted } from './Images/PageImages'

import { colors } from '../styles/'

const PageLayoutContainer = styled.main({
  position: 'relative'
})

const BackgroundTop = styled.div({
  position: 'absolute',
  background: colors.darkestWhite,
  height: '140vh',
  width: '37vw'
})

const HeaderContainer = styled.div({ position: 'relative' })

const PageLayout = () => (
  <PageLayoutContainer>
    <BackgroundTop />
    <HeaderContainer>
      <PageImagesRouted />
      <HeaderRouted />
    </HeaderContainer>
    <PageContentAreaConnected />
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
