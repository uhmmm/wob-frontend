import React from 'react'
import styled from '@emotion/styled'
import ReactMarkdown from 'react-markdown'

import { type } from '../styles'

const MarkdownContainer = styled.div({
  h3: { ...type.title.small, margin: '0 0 2rem' },
  h4: { ...type.content.mediumSpacedHead, margin: '0 0 2rem' },
  p: { ...type.content.mediumSpaced, margin: '0 0 2rem' }
})

const Markdown = ({ element }) => (
  <MarkdownContainer>
    <ReactMarkdown source={element.text} />
  </MarkdownContainer>
)

export { Markdown }
