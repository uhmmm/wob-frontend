import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router'
import { findKey } from 'lodash'
import format from 'string-template'

import { getLetterElById } from '../reducers/letterElements'
import { getLetterById } from '../reducers/letters'
import { getDocumentById } from '../reducers/documents'

const LetterVariableResolver = ({ variable, letterEl }) => {
  let formattedTemplate =
    variable &&
    variable.defaultValue &&
    format(letterEl.template, {
      variable: variable.defaultValue || ''
    })
  return <>{formattedTemplate || letterEl.template}</>
}

const mapStateToProps = (state, { letterElId, entityId, entityType }) => {
  let letterEl = getLetterElById(state, letterElId)

  // select letter or document
  let entity
  switch (entityType) {
    case 'letters':
      entity = getLetterById(state, entityId)
      break
    case 'documents':
      entity = getDocumentById(state, entityId)
      break
    default:
      break
  }

  console.log(entityType, entityId)
  // resolve the variable that fills the format string
  let entityVarKey = findKey(entity, prop => {
    let varId = prop.variableId && prop.variableId
    let elemVarId = letterEl.letterVariableId && letterEl.letterVariableId[0]
    return varId && elemVarId && varId === elemVarId
  })
  let variable = entity[entityVarKey]

  return {
    letterEl,
    variable
  }
}

const LetterVariableResolverConnected = withRouter(
  connect(mapStateToProps)(LetterVariableResolver)
)

export { LetterVariableResolverConnected }
