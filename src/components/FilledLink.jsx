import React from 'react'
import { Link, withRouter } from 'react-router-dom'
import { connect } from 'react-redux'

import { getRouteById } from '../reducers/routes'

const FilledLink = ({ children, linkSlug }) => {
  return <Link to={linkSlug}>{children}</Link>
}

const mapStateToProps = (state, { linkRouteId }) => {
  return {
    linkSlug: linkRouteId && getRouteById({ state, routeId: linkRouteId }).slug
  }
}

const FilledLinkConnected = connect(mapStateToProps)(FilledLink)
const FilledLinkRouted = withRouter(FilledLinkConnected)

export { FilledLinkRouted }
