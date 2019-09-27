import React from 'react'
import styled from '@emotion/styled'
import { connect } from 'react-redux'

import { ElementResolver } from './ElementResolver'

import { getElementsByProperty } from '../reducers/elements'

const FooterContainer = styled.div({})

const Footer = ({ elements }) => (
  <FooterContainer>
    {elements.map(el => {
      return <ElementResolver key={el.elementId} el={el} />
    })}
  </FooterContainer>
)

const mapStateToProps = (state, { routeId }) => {
  return {
    elements: getElementsByProperty(state, {
      partOf: ['pageFooter']
    })
  }
}

const FooterConnected = connect(mapStateToProps)(Footer)

export { FooterConnected }
