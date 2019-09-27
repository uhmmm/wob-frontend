import React from 'react'
import { groupBy } from 'lodash'

import { ListItemCheckbox } from './List/ListCheckbox'
import { ButtonMedium } from '../Button'
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
              return <ButtonMedium key={el.elementId}>{el.text}</ButtonMedium>
            default:
              return null
          }
        })}
    </>
  )
}

export { SpecificDocuments }
