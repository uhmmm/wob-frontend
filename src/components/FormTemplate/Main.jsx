import React from "react";
import styled from "@emotion/styled";
import { Switch, Route } from "react-router-dom";
import { connect } from "react-redux";

import { Logo } from "./Logo/Logo";
import { FormElementResolverConnected } from "./FormElementResolver";

import { getElementsByProperty } from "../../reducers/formElements";
import { getRouteBySlug } from "../../reducers/routes";

import { colors } from "../../styles";

const MainContainer = styled.main({
  flex: "0 0 calc(50vw - 4rem)",
  display: "flex",
  flexDirection: "column",
  height: "100%",
  padding: "8rem 8rem 12rem 4rem",
  background: colors.yellow
});

const LogoContainer = styled.div({
  margin: "0 0 4rem 0"
});

const Main = ({ rootElementId, entityId }) => {
  return rootElementId ? (
    <MainContainer>
      <LogoContainer>
        <Logo />
      </LogoContainer>
      <FormElementResolverConnected
        formElId={rootElementId}
        entityId={entityId}
        entityType="letters"
      />
    </MainContainer>
  ) : null;
};

const mapStateToProps = (state, { match }) => {
  let route = getRouteBySlug(state, { slug: match.params.formSlug });

  let rootElement = getElementsByProperty(state, {
    routeId: [route.routeId],
    partOf: ["main"],
    type: "root"
  })[0];

  return {
    rootElementId: rootElement && rootElement.elementId,
    entityId: match.params.letterId
  };
};

const MainConnected = connect(mapStateToProps)(Main);

const MainRouter = () => {
  return (
    <Switch>
      <Route
        path="/letter/:letterId/form/:formSlug"
        component={MainConnected}
      ></Route>
    </Switch>
  );
};

export { MainRouter };
