import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router'
import { findKey, includes } from 'lodash'
import format from 'string-template'

import { getLetterElById } from '../reducers/letterElements'
import { getLetterById } from '../reducers/letters'

const LetterVariableResolver = ({ letterVar, letterEl }) => {
  return (
    <>
      {letterVar &&
        letterVar.defaultValue &&
        format(letterEl.template, {
          variable: letterVar.defaultValue || ''
        })}
    </>
  )
}

const mapStateToProps = (state, { letterElId, match }) => {
  let letter = getLetterById(state, match.params.letterId)
  let letterEl = getLetterElById(state, letterElId)
  let key = findKey(letter, prop => {
    let varId = prop.variableId
    let elemVarId = letterEl.letterVariableId && letterEl.letterVariableId[0]
    let comparison = varId === elemVarId
    return comparison
  })
  return {
    letterEl,
    letterVar: letter[key]
  }
}

const LetterVariableResolverConnected = withRouter(
  connect(mapStateToProps)(LetterVariableResolver)
)

export { LetterVariableResolverConnected }
