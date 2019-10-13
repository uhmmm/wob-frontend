import React from 'react'
import styled from '@emotion/styled'
import { connect } from 'react-redux'

import { FormElementResolverConnected } from '../FormElementResolver'

import { getElementsByProperty } from '../../reducers/formElements'

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

const Footer = ({ rootElementId }) => {
  return (
    <FooterContainer>
      <DetailsContainer>
        <FormElementResolverConnected formElId={rootElementId} />
      </DetailsContainer>
      <Background src={backgroundImg} />
    </FooterContainer>
  )
}

const mapStateToProps = state => {
  let rootElement = getElementsByProperty(state, {
    partOf: ['pageFooter'],
    type: 'root'
  })
  return {
    rootElementId: rootElement && rootElement[0].elementId
  }
}

const FooterConnected = connect(mapStateToProps)(Footer)

export { FooterConnected }
