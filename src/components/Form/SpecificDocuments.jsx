import React, { useState } from 'react'
import styled from '@emotion/styled'
import { groupBy } from 'lodash'

import { ListItemCheckbox } from './List/ListCheckbox'
import { ButtonMedium } from '../Button'
import { InputField } from './InputField'

import { colors, type } from '../../styles'

const Label = styled.div({
  ...type.content.medium
})

const TabContainer = styled.div(({ active }) => ({
  flex: '1 1 auto',
  display: 'flex',
  justifyContent: 'center',
  background: active ? colors.white : colors.darkerYellow,
  padding: '0.5rem 1rem',
  border: `1px solid ${colors.blackestTransparent16}`,
  '&:first-of-type': {
    borderRadius: '10px 0 0 10px'
  },
  '&:last-of-type': {
    borderRadius: '0 10px 10px 0'
  }
}))

const Tab = ({ text, active, handler }) => {
  return (
    <TabContainer active={active} onClick={handler}>
      <Label>{text}</Label>
    </TabContainer>
  )
}

const TabsContainer = styled.div({ display: 'flex', width: '100%' })

const Tabs = ({ tabs = [1, 2, 3] }) => {
  let [activeTab, setActiveTab] = useState(1)

  let tabHandler = elementId => {
    return setActiveTab(elementId)
  }

  return (
    <TabsContainer>
      {tabs.map((tab, key) => {
        return (
          <Tab
            key={tab}
            text={`Document ${tab}`}
            active={tab === activeTab}
            handler={() => tabHandler(tab)}
          />
        )
      })}
    </TabsContainer>
  )
}

const SpecificDocuments = ({ elements }) => {
  let formElementGroups = groupBy(elements, 'partOf')
  let inputEls =
    formElementGroups[
      'formSpecificDocuments,formSpecificDocuments/documentName'
    ]
  return (
    <div>
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
    </div>
  )
}

export { SpecificDocuments }
