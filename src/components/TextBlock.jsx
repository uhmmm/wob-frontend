import React from 'react'
import styled from '@emotion/styled'
import { type, colors } from '../styles'

import { InfoLinkRouted } from './InfoLink'

const TextLarge = styled.p({
  ...type.content.large,
  margin: '0 0 2rem',
  color: colors.darkestGrey
})

const TextMedium = styled.p({
  ...type.content.medium,
  margin: '0 0 2rem',
  color: colors.darkestGrey
})

const TextSpan = styled.span({ margin: '0 1rem 0 0' })

const TextEls = {
  textLarge: TextLarge,
  textMedium: TextMedium
}

const TextBlock = ({ element, textType }) => {
  let TextEl = TextEls[textType]
  return (
    <TextEl>
      <TextSpan>{element.text}</TextSpan>
      {element.linkRouteId && (
        <InfoLinkRouted linkRouteId={element.linkRouteId[0]} />
      )}
    </TextEl>
  )
}

export { TextBlock }
