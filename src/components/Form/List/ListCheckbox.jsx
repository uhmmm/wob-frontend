import React from 'react'
import styled from '@emotion/styled'

import { InfoLinkRouted } from '../InfoLink'
import { Checkbox } from '../../Checkbox/Checkbox'

import { type, colors } from '../../../styles'

const CheckboxLineContainer = styled.div({ display: 'flex' })
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

export { ListItemCheckbox, ListCheckbox }
