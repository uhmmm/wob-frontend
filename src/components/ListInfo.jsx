import React from 'react'
import styled from '@emotion/styled'
import { connect } from 'react-redux'
import { getElementsByProperty } from '../reducers/formElements'

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

const ListItemInfo = ({ linkRouteId, text }) => (
  <ListItemContainer>
    <Label>
      <TextSpan>{text}</TextSpan>
      {linkRouteId && <InfoLinkRouted linkRouteId={linkRouteId} />}
    </Label>
  </ListItemContainer>
)

const ListInfo = ({ elements }) => (
  <ListInfoContainer>
    {elements.map((el, key) => {
      return (
        <ListItemInfo
          key={el.elementId}
          linkRouteId={el.linkRouteId}
          text={el.text}
        />
      )
    })}
  </ListInfoContainer>
)

const mapStateToProps = (state, { routeId }) => {
  return {
    elements: getElementsByProperty(state, { partOf: ['listInfo'], routeId })
  }
}

const ListInfoConnected = connect(mapStateToProps)(ListInfo)

export { ListInfoConnected }
