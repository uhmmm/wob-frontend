import React from 'react'
import styled from '@emotion/styled'
import { withRouter, Link } from 'react-router-dom'
import { connect } from 'react-redux'

import { Bubble } from '../../Bubble/Bubble'
import { getRouteById, getRouteBySlug } from '../../../reducers/routes'

import iconLeft from './icon-left.svg'
import iconRight from './icon-right.svg'

const PaginationContainer = styled.div({
  position: 'absolute',
  left: 'calc(50% - 2rem)',
  bottom: '8rem',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'space-between',
  height: '8rem'
})

const Pagination = ({ prevRoute, nextRoute }) => {
  return (
    <PaginationContainer>
      {prevRoute && (
        <Link
          to={prevRoute.slug ? `/${prevRoute.type}/${prevRoute.slug}` : '/'}
        >
          <Bubble size="3" vOrient="negative" icon={iconLeft} />
        </Link>
      )}
      {nextRoute && (
        <Link to={`/${nextRoute.type}/${nextRoute.slug}`}>
          <Bubble
            size="4"
            hOrient="negative"
            vOrient="negative"
            bgInversed="true"
            icon={iconRight}
          />
        </Link>
      )}
    </PaginationContainer>
  )
}

const mapStateToProps = (state, { match }) => {
  const route = getRouteBySlug({ state, slug: match.params.formSlug })
  return {
    prevRoute: getRouteById({ state, routeId: route.prevRouteId }),
    nextRoute: getRouteById({ state, routeId: route.nextRouteId })
  }
}

const PaginationConnected = connect(
  mapStateToProps,
  {}
)(Pagination)

const PaginationRouted = withRouter(PaginationConnected)

export { Pagination, PaginationRouted }
