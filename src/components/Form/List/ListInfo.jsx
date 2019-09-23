import React from 'react'
import styled from '@emotion/styled'

import { InfoLinkRouted } from '../InfoLink'

import { colors, type } from '../../../styles'

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
  ...type.content.medium
})

const TextSpan = styled.span({
  borderBottom: `dotted 2px ${colors.black}`,
  margin: '0 1rem 0 0'
})

const ListItemInfo = ({ linkRouteId, text }) => (
  <ListItemContainer>
    <Label>
      <TextSpan>{text}</TextSpan>
      {linkRouteId && <InfoLinkRouted linkRouteId={linkRouteId} />}
    </Label>
  </ListItemContainer>
)

const ListInfo = ({ elements }) => (
  <ListBubbleContainer>
    {elements.map((el, key) => {
      return (
        <ListItemInfo
          key={el.elementId}
          linkRouteId={el.linkRouteId}
          text={el.text}
        />
      )
    })}
  </ListBubbleContainer>
)

export { ListInfo }
