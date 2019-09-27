import React from 'react'
import { Link, withRouter } from 'react-router-dom'
import { connect } from 'react-redux'

import { getRouteById } from '../reducers/routes'

const FilledLink = ({ children, linkPath }) => {
  return <Link to={linkPath}>{children}</Link>
}

const mapStateToProps = (state, { linkRouteId }) => {
  const route = getRouteById(state, { routeId: linkRouteId })
  return {
    linkPath: linkRouteId && `/${route.type}/${route.slug}`
  }
}

const FilledLinkConnected = connect(mapStateToProps)(FilledLink)
const FilledLinkRouted = withRouter(FilledLinkConnected)

export { FilledLinkRouted }
