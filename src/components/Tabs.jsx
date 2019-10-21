import React from 'react'
import { connect } from 'react-redux'
import styled from '@emotion/styled'

import { colors, type } from '../styles'

import { setActiveTab } from '../actions/ui'
import { getActiveTab } from '../reducers/ui'

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
  ...type.content.medium,
  cursor: 'pointer'
})

const Tab = ({ text, active, handler }) => {
  return (
    <TabContainer active={active} onClick={handler}>
      <Label>{text}</Label>
    </TabContainer>
  )
}

const TabsContainer = styled.div({ display: 'flex', width: '100%' })

const Tabs = ({ tabs = [0, 1, 2], activeTab, setActiveTab }) => {
  return (
    <TabsContainer>
      {tabs.map((tab, key) => {
        return (
          <Tab
            key={tab}
            text={`Document ${tab}`}
            active={tab === activeTab}
            handler={() => setActiveTab(key)}
          />
        )
      })}
    </TabsContainer>
  )
}

const mapStateToProps = state => {
  return { activeTab: getActiveTab(state) }
}

const TabsConnected = connect(
  mapStateToProps,
  { setActiveTab }
)(Tabs)

const ContainerWithTabsContainer = styled.div({})

const ContainerWithTabs = ({ children }) => {
  return (
    <ContainerWithTabsContainer>
      <TabsConnected />
      {children}
    </ContainerWithTabsContainer>
  )
}

export { ContainerWithTabs }
