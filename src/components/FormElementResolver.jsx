import React from 'react'
import { connect } from 'react-redux'
import { findKey } from 'lodash'

import { getElementById } from '../reducers/formElements'
import { elements } from './FormElementTypes'
import { getLetterById } from '../reducers/letters'
import { getDocumentById } from '../reducers/documents'
import { getFieldById } from '../reducers/fields'
import { getPersonById } from '../reducers/people'
import { getPeriodById } from '../reducers/periods'

// NEXT: Display initial variables
// THEN: Tablooping, tabs and ui state
// THEN: Check Asides for root typing (prolly requires tab state)
// THEN: Input variables and placeholders

const FormElementResolver = ({ entityId, formEl, variable }) => {
  console.log(variable)
  if (formEl) {
    let Element = elements[formEl.type]
    return Element ? (
      <Element key={formEl.elementId} element={formEl} variable={variable}>
        {formEl.text}
        {formEl.children &&
          formEl.children.map(childElementId => {
            return (
              <FormElementResolverConnected
                key={childElementId}
                formElId={childElementId}
                entityId={entityId}
                entityType={formEl.refEntityType}
              />
            )
          })}
      </Element>
    ) : (
      <div>ViewError: ViewModel cannot be found</div>
    )
  } else {
    return <div>ViewError: ElementId cannot be found</div>
  }
}

const entityTypeSelector = {
  letters: getLetterById,
  documents: getDocumentById,
  fields: getFieldById,
  people: getPersonById,
  periods: getPeriodById
}

const mapStateToProps = (state, { formElId, entityType, entityId }) => {
  let entity =
    entityId && entityType && entityTypeSelector[entityType](state, entityId)
  let formEl = getElementById(state, formElId)

  let entityVarKey = findKey(entity, prop => {
    let elemVarId = formEl.variableId && formEl.variableId[0]
    return elemVarId && prop.variableId === elemVarId
  })

  return {
    formEl,
    entity,
    entityId,
    variable: entity && entity[entityVarKey]
  }
}

const FormElementResolverConnected = connect(mapStateToProps)(
  FormElementResolver
)

export { FormElementResolverConnected }
