import React from 'react'
import { Route, Switch, Link, withRouter } from 'react-router-dom'

import { InfoBubble } from '../../Bubble/Bubble'

const InfoLink = ({ to }) => {
  return (
    <Switch>
      <Route
        path={`/form/:formSlug/aside/${to}`}
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
          let path = `${match.url}/aside/${to}`
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

const InfoLinkRouted = withRouter(InfoLink)

export { InfoLink, InfoLinkRouted }
