import React from 'react'
import styled from '@emotion/styled'

import { InfoLinkRouted } from './InfoLink'

import { colors, type } from '../styles'

const ListInfoContainer = styled.ul({
  margin: 'auto 0 0 0'
})

const ListItemContainer = styled.li({
  ...type.content.medium,
  display: 'flex',
  '&:last-of-type': {
    margin: '0 0 1rem'
  }
})

const Label = styled.label({
  ...type.content.medium,
  color: colors.darkestGrey
})

const TextSpan = styled.span({
  borderBottom: `dotted 2px ${colors.black}`,
  margin: '0 1rem 0 0'
})

const ListItemInfo = ({ element, children }) => (
  <ListItemContainer>
    <Label>
      <TextSpan>{children}</TextSpan>
      {element.linkRouteId && (
        <InfoLinkRouted linkRouteId={element.linkRouteId} />
      )}
    </Label>
  </ListItemContainer>
)

export { ListInfoContainer, ListItemInfo }
