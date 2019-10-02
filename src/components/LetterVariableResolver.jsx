import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router'
import { findKey } from 'lodash'
import format from 'string-template'

import { getLetterElById } from '../reducers/letterElements'
import { getLetterById } from '../reducers/letters'

const LetterVariableResolver = ({ letterVar, letterEl }) => {
  let formattedTemplate =
    letterVar &&
    letterVar.defaultValue &&
    format(letterEl.template, {
      variable: letterVar.defaultValue || ''
    })
  return <>{formattedTemplate || letterEl.template}</>
}

const mapStateToProps = (state, { letterElId, match }) => {
  let letter = getLetterById(state, match.params.letterId)
  let letterEl = getLetterElById(state, letterElId)

  // resolve the variable that fills the format string
  let letterVarKey = findKey(letter, prop => {
    let varId = prop.variableId && prop.variableId
    let elemVarId = letterEl.letterVariableId && letterEl.letterVariableId[0]
    return varId && elemVarId && varId === elemVarId
  })
  let letterVar = letter[letterVarKey]

  return {
    letterEl,
    letterVar
  }
}

const LetterVariableResolverConnected = withRouter(
  connect(mapStateToProps)(LetterVariableResolver)
)

export { LetterVariableResolverConnected }
