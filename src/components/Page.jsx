import React from "react";
import styled from "@emotion/styled";
import { Switch, Route } from "react-router";

import { LetterMetaList } from "./LetterMeta/LetterMetaList";
import { HeaderRouted } from "./PageHeader";
import { FooterConnected } from "./PageFooter/PageFooter";
import { PageContentAreaConnected } from "./PageContentArea";

// import { colors } from "../styles/";

const PageLayoutContainer = styled.main({
  position: "relative"
});

const ContentContainer = styled.div({ position: "relative" });

const PageLayout = () => (
  <PageLayoutContainer>
    <HeaderRouted />
    <ContentContainer>
      <PageContentAreaConnected />
    </ContentContainer>
    <LetterMetaList />
    <FooterConnected />
  </PageLayoutContainer>
);

const PageRouter = () => {
  return (
    <Switch>
      <Route path="/letter/:letterId/page/:pageSlug" component={PageLayout} />
      <Route path="/page/:pageSlug" component={PageLayout} />
    </Switch>
  );
};

export { PageLayout, PageRouter };
