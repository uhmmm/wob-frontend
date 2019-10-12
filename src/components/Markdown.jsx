import React from 'react'
import styled from '@emotion/styled'
import ReactMarkdown from 'react-markdown'

import { type } from '../styles'

const MarkdownContainer = styled.div(({ spacing }) => ({
  h4: { ...type.title.xsmall, margin: '0 0 2rem' },
  h5: {
    ...(spacing === 'wide'
      ? type.content.mediumSpacedHead
      : type.content.mediumHead),
    margin: '0 0 2rem'
  },
  p: {
    ...(spacing === 'wide' ? type.content.mediumSpaced : type.content.medium),
    margin: '0 0 2rem'
  }
}))

const Markdown = ({ element, spacing = 'wide' }) => (
  <MarkdownContainer spacing={spacing}>
    <ReactMarkdown source={element.text} />
  </MarkdownContainer>
)

export { Markdown }
