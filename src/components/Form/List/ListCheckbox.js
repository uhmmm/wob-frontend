import React from 'react'
import styled from '@emotion/styled'

import { InfoLinkRouted } from '../InfoLink'
import { Checkbox } from '../../Checkbox/Checkbox'

import { type } from '../../../styles'

const Label = styled.label({ margin: '0 0 0 1rem', ...type.content.medium })
const CheckboxLineContainer = styled.div({ display: 'flex' })
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

export { ListItemCheckbox }
