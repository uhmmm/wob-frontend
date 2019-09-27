import React from 'react'
import styled from '@emotion/styled'
import { connect } from 'react-redux'

import { ElementResolver } from './ElementResolver'

import { getElementsByProperty } from '../reducers/elements'

const HeaderContainer = styled.main({})

const Header = ({ elements }) => {
  console.log(elements)
  return (
    <HeaderContainer>
      {elements.map(el => {
        return <ElementResolver key={el.elementId} el={el} />
      })}
    </HeaderContainer>
  )
}

const mapStateToProps = (state, { routeId }) => {
  return {
    elements: getElementsByProperty(state, {
      partOf: ['pageHeader']
    })
  }
}

const HeaderConnected = connect(mapStateToProps)(Header)

export { HeaderConnected }
