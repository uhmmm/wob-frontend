import React from 'react'
import styled from '@emotion/styled'
import { type, colors } from '../styles'

import { InfoLinkRouted } from './InfoLink'

const Text = styled.p({
  ...type.content.medium,
  margin: '0 0 2rem',
  color: colors.darkestGrey
})

const TextSpan = styled.span({ margin: '0 1rem 0 0' })

const TextBlock = ({ element }) => {
  return (
    <Text>
      <TextSpan>{element.text}</TextSpan>
      {element.linkRouteId && (
        <InfoLinkRouted linkRouteId={element.linkRouteId[0]} />
      )}
    </Text>
  )
}

export { TextBlock }
