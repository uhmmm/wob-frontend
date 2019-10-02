import React, { useEffect } from 'react'
import styled from '@emotion/styled'
import { Switch, Route } from 'react-router-dom'
import { connect } from 'react-redux'

import { AsideCloseButton } from './AsideCloseButton/AsideCloseButton'

import { colors } from '../styles'
import { getElementsBySlug } from '../reducers/formElements'
import { ElementResolver } from './ElementResolver'
import { toggleLetter } from '../actions/ui'

const AsideContainer = styled.aside({
  position: 'absolute',
  top: '16rem',
  left: 0,
  width: '40rem',
  padding: '4rem',
  minHeight: '100vh',
  background: colors.darkestWhite,
  boxShadow: '1px 1p',
  borderRadius: '0 10px 0 0'
})

const Aside = ({ elements, toggleLetter }) => {
  useEffect(() => {
    toggleLetter()
  }, [toggleLetter])
  return (
    <AsideContainer>
      <AsideCloseButton></AsideCloseButton>
      {elements &&
        elements.map(el => {
          return <ElementResolver key={el.elementId} el={el} />
        })}
    </AsideContainer>
  )
}

const mapStateToProps = (state, { match }) => {
  return {
    elements: getElementsBySlug(state, { slug: match.params.asideSlug })
  }
}

const AsideConnected = connect(
  mapStateToProps,
  { toggleLetter }
)(Aside)

const AsideRouter = () => {
  return (
    <Switch>
      <Route
        path="/letter/:letterId/form/:formSlug/aside/:asideSlug"
        component={AsideConnected}
      ></Route>
    </Switch>
  )
}

export { Aside, AsideRouter }
