import React from "react";
import styled from "@emotion/styled";
import { connect } from "react-redux";
import { withRouter } from "react-router";

import { FormElementResolverConnected } from "./FormElementResolver";
import { Logo } from "./Logo/Logo";
import { PageImagesRouted } from "./Images/PageImages";

import { getElementsByProperty } from "../reducers/formElements";
import { getRouteBySlug } from "../reducers/routes";

import { colors } from "../styles";

const HeaderContainer = styled.div({
  position: "relative",
  top: 0,
  height: "90%",
  width: "100%",
  overflow: "hidden"
});

const BorderHorizontal = styled.div({
  position: "absolute",
  borderRight: "100vw solid transparent",
  borderTop: `2rem solid ${colors.yellow}`
});

const BorderVertical = styled.div({
  position: "absolute",
  borderRight: `2rem solid ${colors.yellow}`,
  borderTop: `100vh solid ${colors.yellow}`
});

const Content = styled.div({
  padding: "8rem 8rem",
  width: "50%",
  minWidth: "50rem"
});

const LogoContainer = styled.div({
  paddingBottom: "8rem"
});

const Header = ({ rootElementId }) => {
  return (
    <HeaderContainer>
      <PageImagesRouted />
      <BorderHorizontal />
      <BorderVertical />
      <Content>
        <LogoContainer>
          <Logo />
        </LogoContainer>
        <FormElementResolverConnected formElId={rootElementId} />
      </Content>
    </HeaderContainer>
  );
};

const mapStateToProps = (state, { match }) => {
  let route = getRouteBySlug(state, { slug: match.params.pageSlug });
  let rootElement = getElementsByProperty(state, {
    routeId: [route.routeId],
    partOf: ["pageHeader"],
    type: "root"
  });
  return {
    rootElementId: rootElement && rootElement[0].elementId
  };
};

const HeaderConnected = connect(mapStateToProps)(Header);

const HeaderRouted = withRouter(HeaderConnected);

export { HeaderRouted };
