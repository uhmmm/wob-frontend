import React from "react";
import styled from "@emotion/styled";

import { colors } from "../../styles";

const SidebarContainer = styled.section({
  flex: "0 0 4rem",
  height: "100%",
  background: colors.darkerYellow
});

const Sidebar = () => {
  return <SidebarContainer />;
};

export { Sidebar };
