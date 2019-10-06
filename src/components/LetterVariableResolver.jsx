import { connect } from 'react-redux'
import { withRouter } from 'react-router'
import { findKey } from 'lodash'
import format from 'string-template'

import { getLetterElById } from '../reducers/letterElements'
import { getLetterById } from '../reducers/letters'
import { getDocumentById } from '../reducers/documents'
import { getFieldById } from '../reducers/fields'
import { getPersonById } from '../reducers/people'

const LetterVariableResolver = ({ variable, letterEl }) => {
  let defaultValue = variable && variable.defaultValue
  return defaultValue
    ? format(letterEl.template, { variable: defaultValue || '' })
    : letterEl.template || ''
}

const entityTypeSelector = {
  letters: getLetterById,
  documents: getDocumentById,
  fields: getFieldById,
  people: getPersonById
}

const mapStateToProps = (state, { letterElId, entityId, entityType }) => {
  let letterEl = getLetterElById(state, letterElId)
  let entity = entityTypeSelector[entityType](state, entityId)

  let entityVarKey = findKey(entity, prop => {
    let elemVarId = letterEl.letterVariableId && letterEl.letterVariableId[0]
    return elemVarId && prop.variableId === elemVarId
  })

  return {
    letterEl,
    variable: entity[entityVarKey]
  }
}

const LetterVariableResolverConnected = withRouter(
  connect(mapStateToProps)(LetterVariableResolver)
)

export { LetterVariableResolverConnected }
