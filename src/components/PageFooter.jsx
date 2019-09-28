import React from 'react'
import styled from '@emotion/styled'
import { connect } from 'react-redux'
import { withRouter } from 'react-router'

import { ElementResolver } from './ElementResolver'

import { getElementsByProperty } from '../reducers/elements'
import { getRouteBySlug } from '../reducers/routes'

const FooterContainer = styled.div({})

const Footer = ({ elements }) => (
  <FooterContainer>
    {elements.map(el => {
      return <ElementResolver key={el.elementId} el={el} />
    })}
  </FooterContainer>
)

const mapStateToProps = (state, { match }) => {
  let route = getRouteBySlug(state, { slug: match.params.pageSlug })
  return {
    elements: getElementsByProperty(state, {
      partOf: ['pageFooter'],
      routeId: [route.routeId]
    })
  }
}

const FooterConnected = withRouter(connect(mapStateToProps)(Footer))

export { FooterConnected }
