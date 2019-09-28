import React from 'react'
import styled from '@emotion/styled'
import { withRouter } from 'react-router'
import { connect } from 'react-redux'
import { includes } from 'lodash'

import { getRouteBySlug } from '../reducers/routes'
import { getLetterVisibility } from '../reducers/ui'
import { toggleLetter } from '../actions/ui'
import { colors, type } from '../styles'

const ToggleBarContainer = styled.div({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: '3rem',
  padding: '0.75rem 1.5rem',
  background: colors.yellow,
  borderRadius: '10px',
  boxShadow: `${colors.blackestTransparent16} 1px 1px 2px`
})

const Label = styled.label({
  padding: '0 0 0 1rem',
  ...type.content.small
})

const ToggleContainer = styled.div({
  position: 'relative',
  display: 'flex',
  alignItems: 'center'
})

const Background = styled.div(({ active }) => {
  return {
    width: '3rem',
    height: '1rem',
    backgroundColor: active ? colors.white : colors.darkerYellow,
    transition: 'background-color 0.1s ease 0.1s',
    borderRadius: '10px'
  }
})

const Knob = styled.div(({ active }) => ({
  position: 'absolute',
  width: '1.5rem',
  height: '1.5rem',
  left: active ? '1.5rem' : '0',
  background: colors.white,
  borderRadius: '100%',
  transition: 'left 0.2s ease'
}))

const Toggle = ({ handler, active }) => {
  return (
    <ToggleContainer onClick={handler}>
      <Background active={active} />
      <Knob active={active} />
    </ToggleContainer>
  )
}

const ToggleBar = ({ visible, letterIsVisible, toggleLetter }) => {
  return visible ? (
    <ToggleBarContainer>
      <Toggle handler={toggleLetter} active={letterIsVisible} />
      <Label>Toon Brief</Label>
    </ToggleBarContainer>
  ) : null
}

const mapStateToProps = (state, { match }) => {
  let route = getRouteBySlug(state, { slug: match.params.formSlug })
  return {
    visible: route && includes(route.letter, 'showToggle'),
    letterIsVisible: getLetterVisibility(state)
  }
}

const ToggleBarRouted = withRouter(
  connect(
    mapStateToProps,
    { toggleLetter }
  )(ToggleBar)
)

export { ToggleBar, ToggleBarRouted }
