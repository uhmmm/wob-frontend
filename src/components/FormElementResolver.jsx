import React, { memo } from 'react'
import { connect } from 'react-redux'
import { findKey } from 'lodash'

import { elements } from './FormElementTypes'

import { getElementById } from '../reducers/formElements'

import { getLetterById } from '../reducers/letters'
import { getDocumentById } from '../reducers/documents'
import { getFieldById } from '../reducers/fields'
import { getPersonById } from '../reducers/people'
import { getPeriodById } from '../reducers/periods'

import { setLetterVariable } from '../actions/letters'
import { setDocumentVariable } from '../actions/documents'
import { setFieldVariable } from '../actions/fields'
import { setPersonVariable } from '../actions/people'
import { setPeriodVariable } from '../actions/periods'
import { getActiveTab } from '../reducers/ui'

// NEXT: Display initial variables
// THEN: Tablooping, tabs and ui state
// THEN: Check Asides for root typing (prolly requires tab state)
// THEN: Input variables and placeholders

const FormElementResolver = memo(
  ({ entityId, entity, formEl, variable, setEntityVariable, activeTab }) => {
    if (formEl) {
      let Element = elements[formEl.type]
      return Element ? (
        <Element
          key={formEl.elementId}
          element={formEl}
          variable={variable}
          setEntityVariable={setEntityVariable}
        >
          {formEl.text}
          {formEl.children &&
            (formEl.type === 'refTab'
              ? formEl.children.map(childElementId => {
                  return (
                    <FormElementResolverConnected
                      key={childElementId}
                      formElId={childElementId}
                      entityId={entity[formEl.refEntityType].value[activeTab]}
                      entityType={formEl.refEntityType}
                    />
                  )
                })
              : formEl.children.map(childElementId => {
                  return (
                    <FormElementResolverConnected
                      key={childElementId}
                      formElId={childElementId}
                      entityId={entityId}
                      entityType={formEl.refEntityType}
                    />
                  )
                }))}
        </Element>
      ) : (
        <div>ViewError: ViewModel cannot be found</div>
      )
    } else {
      return <div>ViewError: ElementId cannot be found</div>
    }
  }
)

const entityTypeSelectors = {
  letters: getLetterById,
  documents: getDocumentById,
  fields: getFieldById,
  people: getPersonById,
  periods: getPeriodById
}

const mapStateToProps = (state, { formElId, entityType, entityId }) => {
  let entity =
    entityId && entityType && entityTypeSelectors[entityType](state, entityId)
  let formEl = getElementById(state, formElId)

  let entityVarKey = findKey(entity, prop => {
    let elemVarId = formEl.variableId && formEl.variableId[0]
    return elemVarId && prop.variableId === elemVarId
  })

  return {
    formEl,
    entity,
    entityId,
    variable: entity && entity[entityVarKey],
    activeTab: getActiveTab(state)
  }
}

const entityTypeActions = {
  letters: setLetterVariable,
  documents: setDocumentVariable,
  fields: setFieldVariable,
  people: setPersonVariable,
  periods: setPeriodVariable
}

const mapDispatchToProps = (dispatch, { entityType, entityId }) => {
  return {
    setEntityVariable: (variableName, variableValue) =>
      dispatch(
        entityTypeActions[entityType](entityId, variableName, variableValue)
      )
  }
}

const FormElementResolverConnected = connect(
  mapStateToProps,
  mapDispatchToProps
)(FormElementResolver)

export { FormElementResolverConnected }
