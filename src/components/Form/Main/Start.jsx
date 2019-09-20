import React from 'react'
import styled from '@emotion/styled'
import { Bubble } from '../../Bubble/Bubble'

import { type } from '../../../styles'
import { InfoLinkRouted } from './InfoLink'

const StartContainer = styled.main({})
const Title = styled.h1({ ...type.title.medium, margin: '0 0 2rem' })
const TextContainer = styled.div({ margin: '0 0 2rem' })
const Text = styled.p({ ...type.content.medium })
const TextSpan = styled.span({ margin: '0 1rem 0 0' })
const List = styled.ul({ margin: '0 0 2rem' })
const ListItemContainer = styled.li({
  ...type.content.medium,
  display: 'flex',
  margin: '0 0 1rem'
})
const Label = styled.label({ margin: '0 0 0 1rem', ...type.content.medium })

const ListItem = ({ children, number }) => (
  <ListItemContainer>
    <Bubble number={number} />
    <Label>{children}</Label>
  </ListItemContainer>
)

const Start = () => {
  return (
    <StartContainer>
      <Title>In drie stappen naar je Wob-verzoek</Title>
      <TextContainer>
        <Text>
          <TextSpan>
            Kun je de documenten op een andere manier in handen krijgen,
            bijvoorbeeld door het gewoon te vragen of door ze ergens anders te
            zoeken?
          </TextSpan>
          <InfoLinkRouted to="informatieverzoeken" />
        </Text>
      </TextContainer>

      <List>
        <ListItem number="1">
          Je vult een aantal (contact)gegevens over jezelf in.
        </ListItem>
        <ListItem number="2">Je selecteert een overheidsinstantie.</ListItem>
        <ListItem number="3">
          Je kiest wat voor documenten of informatie je zoekt.
        </ListItem>
      </List>
      <Text>Voila!</Text>
    </StartContainer>
  )
}

export { Start }
