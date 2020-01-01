import React from "react";
import styled from "@emotion/styled";
import { Link } from "react-router-dom";

import logo from "./logo.svg";

const LogoImg = styled.img({ height: "4rem" });

const Logo = () => (
  <Link to="/">
    <LogoImg src={logo} />
  </Link>
);

export { Logo };
