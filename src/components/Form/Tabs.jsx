import React, { useState } from 'react'
import styled from '@emotion/styled'

import { colors, type } from '../../styles'

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

const Label = styled.div({
  ...type.content.medium
})

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

export { Tabs }
