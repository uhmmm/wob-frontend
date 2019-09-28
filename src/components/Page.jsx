import React from 'react'
import styled from '@emotion/styled'
import { Switch, Route } from 'react-router'

import { LetterMetaList } from './LetterMeta/LetterMetaList'
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
  height: '110vh',
  width: '37vw'
})

const BackgroundMiddle = styled.div({
  position: 'absolute',
  right: '0',
  top: '10rem',
  background: colors.darkestWhite,
  height: '80vh',
  width: '37vw'
})

const HeaderContainer = styled.div({ position: 'relative' })
const ContentContainer = styled.div({ position: 'relative' })

const PageLayout = () => (
  <PageLayoutContainer>
    <BackgroundTop />
    <HeaderContainer>
      <PageImagesRouted />
      <HeaderRouted />
    </HeaderContainer>
    <ContentContainer>
      <BackgroundMiddle />
      <PageContentAreaConnected />
    </ContentContainer>
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
