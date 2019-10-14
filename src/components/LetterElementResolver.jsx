import React, { memo } from 'react'
import { connect } from 'react-redux'
import { computeElementVisibility } from './letterElementVisibility'
import format from 'string-template'
import { findKey } from 'lodash'

import { letterElementTypes } from './LetterElementTypes'

import { getLetterById } from '../reducers/letters'
import { getDocumentById } from '../reducers/documents'
import { getLetterElById } from '../reducers/letterElements'
import { getFieldById } from '../reducers/fields'
import { getPersonById } from '../reducers/people'
import { getPeriodById } from '../reducers/periods'

const LetterTemplate = ({ template, value }) => {
  return value ? format(template, { variable: value || '' }) : template || ''
}

const LetterElementResolver = memo(
  ({ letterEl, entityId, entity, variable, isVisible }) => {
    let Element = letterElementTypes[letterEl.type]
    return isVisible ? (
      <Element>
        <LetterTemplate
          template={letterEl.template}
          value={
            variable &&
            (variable.value !== '' ? variable.value : variable.placeholder)
          }
        />
        {letterEl.children &&
          letterEl.children.map((childLetterElId, key) => {
            if (letterEl.type === 'refList') {
              return entity[letterEl.refEntityType].value.map(childEntityId => {
                return (
                  <LetterElementResolverConnected
                    key={childLetterElId + childEntityId}
                    letterElId={childLetterElId}
                    entityId={childEntityId}
                    entityType={letterEl.refEntityType}
                  />
                )
              })
            } else {
              return (
                <LetterElementResolverConnected
                  key={childLetterElId}
                  letterElId={childLetterElId}
                  entityId={entityId}
                  entityType={letterEl.refEntityType}
                />
              )
            }
          })}
      </Element>
    ) : null
  }
)

const entityTypeSelector = {
  letters: getLetterById,
  documents: getDocumentById,
  fields: getFieldById,
  people: getPersonById,
  periods: getPeriodById
}

const mapStateToProps = (state, { letterElId, entityId, entityType }) => {
  let letterEl = getLetterElById(state, letterElId)
  let entity = entityTypeSelector[entityType](state, entityId)

  let entityVarKey = findKey(entity, prop => {
    let elemVarId = letterEl.variableId && letterEl.variableId[0]
    return elemVarId && prop.variableId === elemVarId
  })

  return {
    letterEl,
    entity,
    entityId,
    variable: entity[entityVarKey],
    isVisible: computeElementVisibility({ entity, letterEl })
  }
}

const LetterElementResolverConnected = connect(mapStateToProps)(
  LetterElementResolver
)

export { LetterElementResolverConnected }
