import React from 'react'
import styled from '@emotion/styled'

import { type } from '../../../styles'

const StartContainer = styled.main({})

const Title = styled.h1({ ...type.title.medium })
const Text = styled.h1({ paddingTop: '2rem', ...type.content.medium })
const List = styled.ul({ padding: '1rem 0' })
const ListItemContainer = styled.li({ ...type.content.medium, display: 'flex' })
const BubbleContainer = styled.div({ position: 'relative' })
const Background = styled.div({})

const Bubble = ({ number }) => (
  <BubbleContainer>
    <Background />
    {number}
  </BubbleContainer>
)

const ListItem = ({ children, number }) => (
  <ListItemContainer>
    <Bubble number={number} />
    {children}
  </ListItemContainer>
)

const Start = () => (
  <StartContainer>
    <Title>In drie stappen naar je Wob-verzoek</Title>
    <Text>
      Kun je de documenten op een andere manier in handen krijgen, bijvoorbeeld
      door het gewoon te vragen of door ze ergens anders te zoeken?
    </Text>
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

export { Start }
