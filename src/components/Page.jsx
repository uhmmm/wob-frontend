import React from 'react'
import styled from '@emotion/styled'

import { LetterMetaList } from './LetterMetaList'
import { Header } from './Header'
import { Footer } from './Footer'
import { CallToAction } from './CallToAction'

const PageContainer = styled.div({})
const ContentContainer = styled.section({})
const ReasonsContainer = styled.section({})

const Page = () => (
  <PageContainer>
    <Header />
    <ContentContainer></ContentContainer>
    <ReasonsContainer></ReasonsContainer>
    <LetterMetaList />
    <CallToAction />
    <Footer />
  </PageContainer>
)

export { Page }
