import React from "react";
import styled from "@emotion/styled";
import { Global, css } from "@emotion/core";
import { Helmet } from "react-helmet-async";
import { connect } from "react-redux";
import { Switch, Route } from "react-router-dom";

import { LetterConnected } from "../Letter";
import { ToggleBarRouted } from "../ToggleBar";
import { PaginationRouted } from "./Pagination/Pagination";
import { MainRouter } from "../Main";
import { ImagesRouted } from "./Images/FormImages";
import { AsideRouter } from "./Aside";
import { Sidebar } from "../Sidebar";
import { ReviewBoxListConnected } from "../ReviewBoxList";

import { getRouteBySlug } from "../../reducers/routes";

const FormLayoutContainer = styled.main({
  position: "relative",
  width: "100vw",
  height: "100vh",
  display: "flex"
});

const RightContainer = styled.section({
  flex: "1 1 50%",
  position: "relative",
  height: "100%",
  padding: "0rem 8rem 0rem 8rem"
});

const ToggleBarContainer = styled.div({
  position: "absolute",
  top: "8rem",
  right: "8rem"
});

const FormLayout = ({ route }) => (
  <FormLayoutContainer>
    <Global styles={css({ body: { overflow: "hidden" } })} />
    <Helmet>
      <title>{`WtW - ${route && route.title}`}</title>
    </Helmet>
    <Sidebar />
    <MainRouter />
    <RightContainer>
      <ImagesRouted />
      <AsideRouter />
      <LetterConnected />
      <ReviewBoxListConnected />
      <PaginationRouted />
      <ToggleBarContainer>
        <ToggleBarRouted />
      </ToggleBarContainer>
    </RightContainer>
  </FormLayoutContainer>
);

const mapStateToProps = (state, { match }) => {
  return {
    route: getRouteBySlug(state, { slug: match.params.formSlug })
  };
};

const FormLayoutConnected = connect(mapStateToProps)(FormLayout);

const FormRouter = () => (
  <Switch>
    <Route
      path="/letter/:letterId/form/:formSlug"
      component={FormLayoutConnected}
    />
  </Switch>
);

export { FormRouter };
