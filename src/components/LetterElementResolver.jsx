import React from 'react'
import { connect } from 'react-redux'
import styled from '@emotion/styled'

import { LetterVariableResolverConnected } from './LetterVariableResolver'

import { getLetterElById } from '../reducers/letterElements'

let LetterElSection = styled.section({})
let LetterElContainer = styled.div({})
let LetterElParagraph = styled.p({})
let LetterElList = styled.ul({})
let LetterElListItem = styled.li({})
let LetterElHeader = styled.h3({})
let LetterElDate = styled.div({})
let LetterElSpan = styled.span({})

const letterElementTypes = {
  root: LetterElSection,
  container: LetterElContainer,
  paragraph: LetterElParagraph,
  list: LetterElList,
  refList: LetterElList,
  listItem: LetterElListItem,
  header: LetterElHeader,
  date: LetterElDate,
  span: LetterElSpan
}

const LetterElementResolver = ({ letterEl }) => {
  let Element = letterElementTypes[letterEl.type]
  return letterEl && letterElementTypes[letterEl.type] ? (
    <Element>
      <LetterVariableResolverConnected letterElId={letterEl.elementId} />
      {letterEl.name}
      {letterEl.children &&
        letterEl.children.map(letterElId => {
          return (
            <LetterElementResolverConnected
              key={letterElId}
              letterElId={letterElId}
            />
          )
        })}
    </Element>
  ) : null
}

const mapStateToProps = (state, { letterElId }) => {
  let letterEl = getLetterElById(state, letterElId)
  return {
    letterEl
  }
}

const LetterElementResolverConnected = connect(mapStateToProps)(
  LetterElementResolver
)

export { LetterElementResolverConnected }
