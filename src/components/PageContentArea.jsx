import React from 'react'
import styled from '@emotion/styled'
import { connect } from 'react-redux'
import { withRouter } from 'react-router'

import { ElementResolver } from './ElementResolver'

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

const PageContentArea = ({ elements }) => {
  return (
    <ContentContainer>
      <ContentColumn>
        {elements[0].map(el => {
          return <ElementResolver key={el.elementId} el={el} />
        })}
      </ContentColumn>
      <ContentColumn>
        {elements[1].map(el => {
          return <ElementResolver key={el.elementId} el={el} />
        })}
      </ContentColumn>
    </ContentContainer>
  )
}

const mapStateToProps = (state, { match }) => {
  let route = getRouteBySlug(state, { slug: match.params.pageSlug })
  return {
    elements: [
      getElementsByProperty(state, {
        partOf: ['pageBlock/1'],
        routeId: [route.routeId]
      }),
      getElementsByProperty(state, {
        partOf: ['pageBlock/2'],
        routeId: [route.routeId]
      })
    ]
  }
}

const PageContentAreaConnected = withRouter(
  connect(mapStateToProps)(PageContentArea)
)

export { PageContentAreaConnected }
