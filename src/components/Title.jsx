import React from 'react'
import styled from '@emotion/styled'

import { type, colors } from '../styles'

const TitleLarge = styled.h1({
  ...type.title.large,
  color: colors.darkestGrey,
  margin: '0 0 2rem'
})
const TitleMedium = styled.h2({ ...type.title.medium, margin: '0 0 2rem' })
const TitleSmall = styled.h3({ ...type.title.small, margin: '0 0 2rem' })

const TitleEls = {
  titleLarge: TitleLarge,
  titleMedium: TitleMedium,
  titleSmall: TitleSmall
}

const Title = ({ element, titleType }) => {
  let TitleEl = TitleEls[titleType] || TitleMedium
  return <TitleEl>{element.text}</TitleEl>
}

export { Title }
