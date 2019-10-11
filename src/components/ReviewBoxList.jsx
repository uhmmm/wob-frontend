import React from 'react'
import styled from '@emotion/styled'
import { connect } from 'react-redux'
import { withRouter } from 'react-router'

import { getRouteBySlug } from '../reducers/routes'
import { getElementsByProperty } from '../reducers/formElements'
import { colors } from '../styles'
import { FormElementResolver } from './FormElementResolver'

const ReviewBoxContainer = styled.div({
  background: colors.yellow,
  margin: '0 0 4rem 0',
  borderRadius: '10px',
  padding: '2rem'
})

const ReviewBox = ({ rootElementId }) => {
  return (
    <ReviewBoxContainer>
      <FormElementResolver elementId={rootElementId} />
    </ReviewBoxContainer>
  )
}

const ReviewBoxListContainer = styled.div({
  position: 'absolute',
  top: '22rem',
  right: '2rem',
  width: '20rem'
})

const ReviewBoxList = ({ elementsList }) => {
  return elementsList[0].length > 0 ? (
    <ReviewBoxListContainer>
      <ReviewBox elements={elementsList[0]} />
      <ReviewBox elements={elementsList[1]} wobKnop />
    </ReviewBoxListContainer>
  ) : null
}

const mapStateToProps = (state, { match }) => {
  let route = getRouteBySlug(state, { slug: match.params.formSlug })
  return {
    elementsList: [
      getElementsByProperty(state, {
        partOf: ['reviewBox/1'],
        routeId: [route.routeId]
      }),
      getElementsByProperty(state, {
        partOf: ['reviewBox/2'],
        routeId: [route.routeId]
      })
    ]
  }
}

const ReviewBoxListConnected = withRouter(
  connect(mapStateToProps)(ReviewBoxList)
)
export { ReviewBoxListConnected }
