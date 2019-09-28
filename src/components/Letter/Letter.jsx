import React from 'react'
import styled from '@emotion/styled'
import { connect } from 'react-redux'
import { withRouter } from 'react-router'
import { includes } from 'lodash'

import { getRouteBySlug } from '../../reducers/routes'
import { colors } from '../../styles'

const LetterArea = styled.div(({ fullScreen }) => ({
  position: fullScreen ? 'relative' : 'absolute',
  width: !fullScreen && 'calc(50vw + 8rem)',
  top: !fullScreen && '14rem',
  left: !fullScreen && '-4rem',
  display: 'flex',
  justifyContent: 'center'
}))

const LetterContainer = styled.section({
  flex: '1 1 50vw',
  maxWidth: '70vw',
  height: '130vh',
  boxShadow: '0 3px 6px 0px rgba(0, 0, 0, 0.1607843137254902)',
  background: colors.white
})

const Letter = ({ letterId, letter, fullScreen }) => {
  return (
    <LetterArea fullScreen={fullScreen}>
      <LetterContainer>{letterId}</LetterContainer>
    </LetterArea>
  )
}

const mapStateToProps = (state, { match }) => {
  let route = getRouteBySlug(state, { slug: match.params.formSlug })
  return {
    fullScreen: route && includes(route.letter, 'fullScreen')
  }
}

const LetterConnected = withRouter(connect(mapStateToProps)(Letter))

export { LetterConnected }
