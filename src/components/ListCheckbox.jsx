import React from 'react'
import styled from '@emotion/styled'
import { connect } from 'react-redux'

import { InfoLinkRouted } from './InfoLink'
import { Checkbox } from './Checkbox/Checkbox'

import { type, colors } from '../styles'

const CheckboxLineContainer = styled.div(({ indented }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: indented ? '0 0 0 3rem' : '0 0 0 0 '
}))

const Label = styled.label({
  margin: '0 0 0 1rem',
  ...type.content.medium,
  color: colors.darkestGrey
})
const TextSpan = styled.span({ margin: ' 0 1rem 0 0' })

const ListItemCheckbox = ({ children, element, indented, variable }) => (
  <CheckboxLineContainer indented={indented}>
    <Checkbox />
    <Label>
      <TextSpan>{children}</TextSpan>
      {element.linkRouteId && (
        <InfoLinkRouted linkRouteId={element.linkRouteId} />
      )}
    </Label>
  </CheckboxLineContainer>
)

const mapStateToProps = (state, { elementId }) => {
  return {
    variable: 'variable'
  }
}

const ListItemCheckboxConnected = connect(mapStateToProps)(ListItemCheckbox)

export { ListItemCheckbox, ListItemCheckboxConnected }
