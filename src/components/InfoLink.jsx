import React from 'react'
import { Route, Switch, Link, withRouter } from 'react-router-dom'
import { connect } from 'react-redux'

import { InfoBubble } from './Bubble/Bubble'
import { getRouteById } from '../reducers/routes'

const InfoLink = ({ linkSlug }) => {
  return (
    <Switch>
      <Route
        path={`/form/:formSlug/aside/${linkSlug}`}
        render={({ match }) => {
          let path = `/form/${match.params.formSlug}`
          return (
            <Link to={path}>
              <InfoBubble />
            </Link>
          )
        }}
      />

      <Route
        path="/form/:formSlug"
        render={({ match }) => {
          let path = `${match.url}/aside/${linkSlug}`
          return (
            <Link to={path}>
              <InfoBubble />
            </Link>
          )
        }}
      />
    </Switch>
  )
}

const InfoLinkConnected = connect((state, { linkRouteId }) => {
  return {
    linkSlug: linkRouteId && getRouteById({ state, routeId: linkRouteId }).slug
  }
})(InfoLink)

const InfoLinkRouted = withRouter(InfoLinkConnected)

export { InfoLink, InfoLinkRouted }
