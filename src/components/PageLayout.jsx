import React from 'react'
import styled from '@emotion/styled'

import { LetterMetaList } from './Page/LetterMetaList'
import { Header } from './Page/Header'
import { Footer } from './Page/Footer'
import { CallToAction } from './Page/CallToAction'
import { Markdown } from './Markdown'

const PageLayoutContainer = styled.main({})
const ContentContainer = styled.section({})
const ContentColumn = styled.section({})

const PageLayout = () => (
  <PageLayoutContainer>
    <Header />
    <ContentContainer>
      <ContentColumn>
        <Markdown />
        <CallToAction />
      </ContentColumn>
      <ContentColumn>
        <Markdown />
      </ContentColumn>
    </ContentContainer>
    <LetterMetaList />
    <Footer />
  </PageLayoutContainer>
)

export { PageLayout }
