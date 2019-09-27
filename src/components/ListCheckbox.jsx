import React from 'react'
import styled from '@emotion/styled'
import { connect } from 'react-redux'
import { getElementsByProperty } from '../reducers/elements'

import { InfoLinkRouted } from './InfoLink'
import { Checkbox } from './Checkbox/Checkbox'

import { type, colors } from '../styles'

const CheckboxLineContainer = styled.div({
  display: 'flex',
  alignItems: 'center'
})

const Label = styled.label({
  margin: '0 0 0 1rem',
  ...type.content.medium,
  color: colors.darkestGrey
})
const TextSpan = styled.span({ margin: ' 0 1rem 0 0' })

const ListItemCheckbox = ({ text, linkRouteId }) => (
  <CheckboxLineContainer>
    <Checkbox />
    <Label>
      <TextSpan>{text}</TextSpan>
      {linkRouteId && <InfoLinkRouted linkRouteId={linkRouteId} />}
    </Label>
  </CheckboxLineContainer>
)

const ListCheckboxContainer = styled.ul({})
const ListCheckbox = ({ elements }) => (
  <ListCheckboxContainer>
    {elements.map(el => {
      return (
        <ListItemCheckbox
          key={el.elementId}
          text={el.text}
          linkRouteId={el.linkRouteId}
        />
      )
    })}
  </ListCheckboxContainer>
)

const mapStateToProps = (state, { routeId }) => {
  return {
    elements: getElementsByProperty(state, { partOf: ['listCheck'], routeId })
  }
}

const ListCheckboxConnected = connect(mapStateToProps)(ListCheckbox)

export { ListItemCheckbox, ListCheckbox, ListCheckboxConnected }
