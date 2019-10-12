import React from 'react'
import styled from '@emotion/styled'

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

const ListItemCheckbox = ({ children, element }) => (
  <CheckboxLineContainer>
    <Checkbox />
    <Label>
      <TextSpan>{children}</TextSpan>
      {element.linkRouteId && (
        <InfoLinkRouted linkRouteId={element.linkRouteId} />
      )}
    </Label>
  </CheckboxLineContainer>
)

export { ListItemCheckbox }
