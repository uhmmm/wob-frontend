import React from 'react'
import styled from '@emotion/styled'

import { Bubble } from './Bubble/Bubble'

import { type, colors } from '../styles'

const ListItemBubbleContainer = styled.ul({ margin: '0 0 2rem' })

const ListItemContainer = styled.li({
  ...type.content.medium,
  display: 'flex',
  margin: '0 0 1rem',
  '&:last-of-type': {
    margin: '0 0 1rem'
  }
})

const Label = styled.label({
  margin: '0 0 0 1rem',
  ...type.content.medium,
  color: colors.darkestGrey
})

const ListItemBubble = ({ children, number = 1 }) => (
  <ListItemContainer>
    <Bubble number={number} />
    <Label>{children}</Label>
  </ListItemContainer>
)

export { ListItemBubble, ListItemBubbleContainer }
