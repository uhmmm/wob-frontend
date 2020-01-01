import React from "react";
import { connect } from "react-redux";
import styled from "@emotion/styled";
import { withRouter } from "react-router-dom";

import { colors, type } from "../../styles";

import { setActiveTab } from "../../actions/ui";
import { getActiveTab } from "../../reducers/ui";
import { getDocumentsByLetterId } from "../../reducers/documents";

const TabContainer = styled.div(({ active }) => ({
  width: "100%",
  minHeight: "2rem",
  flex: "1 1 auto",
  display: "flex",
  justifyContent: "center",
  background: active ? colors.white : colors.darkerYellow,
  padding: "0.5rem 1rem",
  border: `1px solid ${colors.blackestTransparent16}`,
  "&:first-of-type": {
    borderRadius: "10px 0 0 10px"
  },
  "&:last-of-type": {
    borderRadius: "0 10px 10px 0"
  }
}));

const Label = styled.div({
  ...type.content.medium,
  cursor: "pointer"
});

const Tab = ({ text, active, handler }) => {
  return (
    <TabContainer active={active} onClick={handler}>
      <Label>{text}</Label>
    </TabContainer>
  );
};

const TabsContainer = styled.div({ display: "flex", width: "100%" });

const Tabs = ({ documents = [], activeTab, setActiveTab }) => {
  return (
    <TabsContainer>
      {documents.length > 0 &&
        documents.map((document, key) => {
          return (
            <Tab
              key={document.documentId}
              text={`Document ${key + 1}`}
              active={document.documentId === activeTab.documentId}
              handler={() => setActiveTab(document.documentId)}
            />
          );
        })}
    </TabsContainer>
  );
};

const mapStateToProps = (state, { match }) => {
  let documents = getDocumentsByLetterId(state, {
    letterId: parseInt(match.params.letterId)
  });
  return { activeTab: getActiveTab(state), documents };
};

const TabsConnected = withRouter(
  connect(mapStateToProps, { setActiveTab })(Tabs)
);

const ContainerWithTabsContainer = styled.div({});

const ContainerWithTabs = ({ children }) => {
  return (
    <ContainerWithTabsContainer>
      <TabsConnected />
      {children}
    </ContainerWithTabsContainer>
  );
};

export { ContainerWithTabs };
