import React from "react";
import styled from "@emotion/styled";

import { colors } from "../../styles";
import closeArrow from "./close-arrow.svg";
import closeArrowHover from "./close-arrow-hover.svg";

const Button = styled.div({
  position: "absolute",
  top: "0",
  right: "0",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  width: "4rem",
  height: "4rem",
  background: `url(${closeArrow}) center center / 1.5rem no-repeat${colors.yellow} `,
  cursor: "pointer",
  outline: "unset",
  borderRadius: "0 10px 0 10px",
  "&:hover": {
    background: `url(${closeArrowHover}) center center / 1.5rem no-repeat ${colors.yellow}`
  }
});

const AsideCloseButton = () => {
  return <Button></Button>;
};

export { AsideCloseButton };
