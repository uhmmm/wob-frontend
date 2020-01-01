import React from "react";
import { Link, withRouter } from "react-router-dom";
import { connect } from "react-redux";

import { getRouteById } from "../../reducers/routes";

const FilledLink = ({ children, linkPath }) => {
  return <Link to={linkPath}>{children}</Link>;
};

const mapStateToProps = (state, { match, linkRouteId }) => {
  const route = getRouteById(state, { routeId: linkRouteId });
  const firstLetter = Object.values(state.letters.byId)[0].letterId;
  return {
    linkPath:
      linkRouteId &&
      `/letter/${match.params.letterId || firstLetter}/${route.type}/${
        route.slug
      }`
  };
};

const FilledLinkConnected = connect(mapStateToProps)(FilledLink);
const FilledLinkRouted = withRouter(FilledLinkConnected);

export { FilledLinkRouted };
