import React from "react";
import styled from "@emotion/styled";
import { connect } from "react-redux";
import { withRouter } from "react-router";
import { includes } from "lodash";

import { getRouteBySlug } from "../../../reducers/routes";
import { getLetterVisibility } from "../../../reducers/ui";
import { getLetterElByProperty } from "../../../reducers/letterElements";
import { colors, type } from "../../../styles";

import { LetterElementResolverConnected } from "./LetterElementResolver";

const LetterArea = styled.section(({ fullScreen }) => ({
  position: fullScreen ? "relative" : "absolute",
  top: "0",
  left: !fullScreen && "-4rem",
  width: !fullScreen ? "calc(50vw + 8rem)" : "100%",
  height: "100%",
  display: "flex",
  justifyContent: "center",
  overflow: "scroll"
}));

const LetterAreaInner = styled.div(({ fullScreen }) => ({
  width: !fullScreen ? "calc(50vw + 8rem)" : "70vw",
  padding: "14rem 0 16rem"
}));

const LetterHeader = styled.div({
  padding: "0 0 3rem 4rem"
});

const Title = styled.h2({
  ...type.title.medium
});

const Label = styled.label({
  ...type.content.medium,
  color: colors.darkGrey
});

const LetterContainer = styled.div(({ fullScreen }) => ({
  flex: "1 1 50vw",
  width: "100%",
  minHeight: "130vh",
  boxShadow: "0 3px 6px 0px rgba(0, 0, 0, 0.1607843137254902)",
  background: colors.white,
  padding: "8rem 8rem 16rem",
  margin: "0 0 80vh"
}));

const Letter = ({ letterRootEl, entityId, fullScreen, visible }) => {
  return visible ? (
    <LetterArea fullScreen={fullScreen}>
      <LetterAreaInner fullScreen={fullScreen}>
        {fullScreen && (
          <LetterHeader>
            <Title>Laatste check</Title>
            <Label>Ontslagregeling belastingdienst</Label>
          </LetterHeader>
        )}
        <LetterContainer fullScreen={fullScreen}>
          <LetterElementResolverConnected
            letterElId={letterRootEl.elementId}
            entityId={entityId}
            entityType="letters"
          />
        </LetterContainer>
      </LetterAreaInner>
    </LetterArea>
  ) : null;
};

const mapStateToProps = (state, { match }) => {
  let route = getRouteBySlug(state, { slug: match.params.formSlug });
  let fullScreen = route && includes(route.letter, "fullScreen");
  let letterRootEl = getLetterElByProperty(state, { type: "root" })[0];
  return {
    letterRootEl,
    entityId: match.params.letterId,
    fullScreen,
    visible: fullScreen
      ? true
      : getLetterVisibility(state) && includes(route.letter, "showToggle")
  };
};

const LetterConnected = withRouter(connect(mapStateToProps)(Letter));

export { LetterConnected };
