import React from "react";
import styled from "@emotion/styled";
import { connect } from "react-redux";
import { withRouter } from "react-router";

import { getRouteBySlug } from "../../reducers/routes";
import { getElementsByProperty } from "../../reducers/formElements";
import { colors } from "../../styles";
import { FormElementResolverConnected } from "./FormElementResolver";

const ReviewBoxContainer = styled.div({
  background: colors.yellow,
  margin: "0 0 4rem 0",
  borderRadius: "10px",
  padding: "2rem"
});

const ReviewBox = ({ rootElementId }) => {
  return (
    <ReviewBoxContainer>
      <FormElementResolverConnected formElId={rootElementId} />
    </ReviewBoxContainer>
  );
};

const ReviewBoxListContainer = styled.div({
  position: "absolute",
  top: "5rem",
  right: "2rem",
  width: "20rem"
});

const ReviewBoxList = ({ rootElementIds }) => {
  return rootElementIds.length > 0 ? (
    <ReviewBoxListContainer>
      <ReviewBox rootElementId={rootElementIds[0]} />
      <ReviewBox rootElementId={rootElementIds[1]} wobKnop />
    </ReviewBoxListContainer>
  ) : null;
};

const mapStateToProps = (state, { match }) => {
  let route = getRouteBySlug(state, { slug: match.params.formSlug });

  let rootElementIds = getElementsByProperty(state, {
    partOf: ["reviewBox/1", "reviewBox/2"],
    routeId: [route.routeId],
    type: "root"
  }).map(value => {
    return value && value.elementId;
  });

  return {
    rootElementIds
  };
};

const ReviewBoxListConnected = withRouter(
  connect(mapStateToProps)(ReviewBoxList)
);
export { ReviewBoxListConnected };
