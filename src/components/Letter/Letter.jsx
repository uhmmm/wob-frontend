import React from 'react'
import styled from '@emotion/styled'
import { connect } from 'react-redux'
import { withRouter } from 'react-router'
import { includes } from 'lodash'

import { getRouteBySlug } from '../../reducers/routes'

const LetterArea = styled.div({
  display: 'flex',
  justifyContent: 'center'
})

const LetterContainer = styled.section({
  flex: '1 1 50vw',
  height: '130vh',
  maxWidth: '70vw',
  boxShadow: '0 3px 6px 0px rgba(0, 0, 0, 0.1607843137254902)'
})

const Letter = ({ letterId, letter, fullScreen }) => {
  console.log(fullScreen)
  return (
    <LetterArea>
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
