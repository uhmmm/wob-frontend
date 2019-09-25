import React from 'react'
import styled from '@emotion/styled'

import { colors, type } from '../../styles'

import { ButtonSmall } from '../Button'

const Border = styled.div({
  position: 'absolute',
  height: '100%',
  width: '100%',
  border: `1px dashed ${colors.darkGrey}`,
  borderRadius: '10px'
})

const Background = styled.div({
  position: 'absolute',
  top: '0.4rem',
  left: '0.4rem',
  height: '100%',
  width: '100%',
  background: colors.darkerYellow,
  borderRadius: '10px'
})

const InstituteCardContainer = styled.div({
  position: 'relative',
  width: '100%',
  height: '12rem',
  margin: '4rem 0',
  cursor: 'pointer',
  '&:hover': {
    [Background]: {
      // background: colors.white
    }
  }
})

const Content = styled.div({
  position: 'relative',
  padding: '1rem'
})
const Header = styled.div({})
const Body = styled.div({})

const Title = styled.h4({
  ...type.content.mediumHead,
  color: colors.darkestGrey
})
const Url = styled.label({
  ...type.content.xsmall,
  color: colors.darkGrey
})
const Headline = styled.h5({
  ...type.content.xsmallHead,
  color: colors.darkestGrey
})

const Function = styled.label({
  ...type.content.xsmall,
  color: colors.darkGrey
})

const Property = styled.p({
  ...type.content.xsmall,
  color: colors.darkGrey
})

const ButtonContainer = styled.div({
  position: 'absolute',
  right: '1rem',
  bottom: '-1rem'
})

const InstituteCard = ({ elements }) => {
  return (
    <InstituteCardContainer>
      <Background />
      <Border />
      <Content>
        <Header>
          <Title>
            Gemeente Enkhuizen <Url>http://www.enkhuizen.nl</Url>
          </Title>

          <Headline>
            Dhr. E.A. van Zuijlen <Function>burgemeester</Function>
          </Headline>
        </Header>
        <Body>
          <Property>Hoogstraat 11</Property>
          <Property>1600 AA Enkhuizen</Property>
          <Property>stadhuis@enkhuizen.nl</Property>
        </Body>
      </Content>
      <ButtonContainer>
        <ButtonSmall>PAS AAN</ButtonSmall>
        <ButtonSmall>MELD FOUTIEF ADRES</ButtonSmall>
      </ButtonContainer>
    </InstituteCardContainer>
  )
}

export { InstituteCard }
