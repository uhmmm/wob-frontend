import React from 'react'
import styled from '@emotion/styled'
import { connect } from 'react-redux'
import { withRouter } from 'react-router'

import { ElementResolver } from '../ElementResolver'

import { getElementsByProperty } from '../../reducers/elements'
import { getRouteBySlug } from '../../reducers/routes'

import backgroundImg from './background.png'
import { colors } from '../../styles'

const FooterContainer = styled.div({
  position: 'relative',
  padding: '30rem 0 0'
})

const Background = styled.img({
  display: 'block',
  width: '100%',
  height: '70vh'
})

const DetailsContainer = styled.div({
  position: 'absolute',
  top: '10rem',
  right: '8rem',
  width: '45%',
  padding: '4rem',
  background: colors.white
})

const Footer = ({ elements }) => (
  <FooterContainer>
    <DetailsContainer>
      {elements.map(el => {
        return <ElementResolver key={el.elementId} el={el} />
      })}
    </DetailsContainer>
    <Background src={backgroundImg} />
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
