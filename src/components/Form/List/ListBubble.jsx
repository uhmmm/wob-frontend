import React from 'react'
import styled from '@emotion/styled'

import { Bubble } from '../../Bubble/Bubble'

import { type, colors } from '../../../styles'

const ListBubbleContainer = styled.ul({ margin: '0 0 2rem' })

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

const ListItemBubble = ({ children, number }) => (
  <ListItemContainer>
    <Bubble number={number} />
    <Label>{children}</Label>
  </ListItemContainer>
)

const ListBubble = ({ elements }) => (
  <ListBubbleContainer>
    {elements.map((el, key) => {
      return (
        <ListItemBubble
          key={el.elementId}
          number={key + 1}
          linkRouteId={el.linkRouteId}
        >
          {el.text}
        </ListItemBubble>
      )
    })}
  </ListBubbleContainer>
)

export { ListBubble }
