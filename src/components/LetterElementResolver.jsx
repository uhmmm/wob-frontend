import React from 'react'
import { connect } from 'react-redux'
import styled from '@emotion/styled'
import { withRouter } from 'react-router'
import { filter, isEqual, includes, every } from 'lodash'
import { getLetterById } from '../reducers/letters'

import { LetterVariableResolverConnected } from './LetterVariableResolver'

import { getLetterElById } from '../reducers/letterElements'

import { type } from '../styles'

let LetterElSection = styled.section({})
let LetterElContainer = styled.div({ padding: '0 0 1rem 0' })
let LetterElParagraph = styled.p({
  ...type.content.medium,
  padding: '0 0 1rem 0'
})
let LetterElList = styled.ul({ padding: '0 0 1rem 0' })
let LetterElListItem = styled.li({ ...type.content.medium, listStyle: 'none' })
let LetterElHeader = styled.h3({ ...type.contentMono.medium })
let LetterElDate = styled.div({ ...type.content.medium, padding: '0 0 1rem 0' })
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

const LetterElementResolver = ({ letterEl, isVisisble }) => {
  let Element = letterElementTypes[letterEl.type]
  return letterEl && isVisisble && letterElementTypes[letterEl.type] ? (
    <Element>
      <LetterVariableResolverConnected letterElId={letterEl.elementId} />
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

// TODO Any next to all
// TODO Document els are parsing to true, refList should behave differently
const compareVisibilityConditions = ({ letter, letterEl }) => {
  let letterVars = filter(letter, prop => {
    return includes(letterEl.letterConditionIds, prop.variableId)
  })

  let letterVarValues = letterVars.map(variable => variable.defaultValue)

  let comparison = letterEl.conditionValues
    ? isEqual(letterVarValues, letterEl.conditionValues)
    : every(letterVarValues, true)

  return comparison
}

const computeVisibility = ({ letter, letterEl }) =>
  letterEl.letterConditionIds
    ? compareVisibilityConditions({ letter, letterEl })
    : true

const mapStateToProps = (state, { letterElId, match }) => {
  let letter = getLetterById(state, match.params.letterId)
  let letterEl = getLetterElById(state, letterElId)

  return {
    letterEl,
    isVisisble: computeVisibility({ letter, letterEl })
  }
}

const LetterElementResolverConnected = withRouter(
  connect(mapStateToProps)(LetterElementResolver)
)

export { LetterElementResolverConnected }
