import React from 'react'
import styled from '@emotion/styled'

import { StoredLetter } from './StoredLetter'

const PageContainer = styled.div({})
const HeaderContainer = styled.header({})
const ContentContainer = styled.section({})
const ReasonsContainer = styled.section({})
const StoredLettersContainer = styled.section({})
const Cta = styled.section({})
const Footer = styled.footer({})

const Page = ({ letters = [{ id: 1 }, { id: 2 }] }) => (
  <PageContainer>
    <HeaderContainer></HeaderContainer>
    <ContentContainer></ContentContainer>
    <ReasonsContainer></ReasonsContainer>
    <StoredLettersContainer>
      {letters.map(letter => (
        <StoredLetter key={letter.id} letterId={letter.id} />
      ))}
    </StoredLettersContainer>
    <Cta></Cta>
    <Footer></Footer>
  </PageContainer>
)

export { Page }
