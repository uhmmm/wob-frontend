import React from 'react'
import styled from '@emotion/styled'
import { connect } from 'react-redux'
import { withRouter } from 'react-router'

import { FormElementResolverConnected } from './FormElementResolver'

import { getElementsByProperty } from '../reducers/formElements'
import { getRouteBySlug } from '../reducers/routes'

const ContentContainer = styled.section({
  position: 'relative',
  display: 'flex'
})
const ContentColumn = styled.section({
  width: '50%',
  padding: '8rem',
  '&:last-of-type': { padding: '16rem 8rem 8rem 8rem' }
})

const PageContentArea = ({ rootElementIds }) => {
  return (
    <ContentContainer>
      <ContentColumn>
        <FormElementResolverConnected elementId={rootElementIds[0]} />
      </ContentColumn>
      <ContentColumn>
        <FormElementResolverConnected elementId={rootElementIds[1]} />
      </ContentColumn>
    </ContentContainer>
  )
}

const mapStateToProps = (state, { match }) => {
  let route = getRouteBySlug(state, { slug: match.params.pageSlug })
  let rootElementIds = getElementsByProperty(state, {
    partOf: ['pageBlock/1', 'pageBlock/2'],
    routeId: [route.routeId],
    type: 'root'
  })
  return {
    rootElementIds: rootElementIds.map(value => {
      return value && value.elementId
    })
  }
}

const PageContentAreaConnected = withRouter(
  connect(mapStateToProps)(PageContentArea)
)

export { PageContentAreaConnected }
