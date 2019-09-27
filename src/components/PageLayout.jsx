import React from 'react'
import styled from '@emotion/styled'

import { LetterMetaList } from './LetterMetaList'
import { Header } from './PageHeader'
import { Footer } from './PageFooter'
import { CallToAction } from './CallToAction'
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
