import React from 'react'
import { connect } from 'react-redux'
import { getElementsByProperty } from '../reducers/elements'
import { groupBy } from 'lodash'

import { ListItemCheckbox } from './ListCheckbox'
import { Button } from './Button'
import { InputField } from './InputField'
import { Tabs } from './Tabs'

const SpecificDocuments = ({ elements }) => {
  let formElementGroups = groupBy(elements, 'partOf')
  let inputEls =
    formElementGroups[
      'formSpecificDocuments,formSpecificDocuments/documentName'
    ]
  return (
    <>
      <Tabs />
      {elements &&
        elements.map((el, elKey) => {
          switch (el.type) {
            case 'inputSmall':
              return <InputField key={elKey} elements={inputEls} />
            case 'listItemCheckYellow':
              return (
                <ListItemCheckbox
                  key={el.elementId}
                  text={el.text}
                  linkRouteId={el.linkRouteId}
                />
              )
            case 'buttonMedium':
              return (
                <Button btnType="buttonMedium" key={el.elementId}>
                  {el.text}
                </Button>
              )
            default:
              return null
          }
        })}
    </>
  )
}

const mapStateToProps = (state, { routeId }) => {
  return {
    elements: getElementsByProperty(state, {
      partOf: ['formSpecificDocuments']
    })
  }
}

const SpecificDocumentsConnected = connect(mapStateToProps)(SpecificDocuments)

export { SpecificDocumentsConnected }