import React from "react";
import styled from "@emotion/styled";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";

import { getRouteBySlug } from "../../reducers/routes";
import { getImageById } from "../../reducers/images";

import whirlwind from "./whirlwind.png";
import machine from "./machine.png";
import train from "./train.png";

const images = {
  whirlwind,
  machine,
  train
};

const Img = styled.img({
  position: "absolute",
  top: "25%",
  left: "calc(50% + 10rem)",
  width: "50%"
});

const PageImage = ({ image }) => {
  return <Img src={images[image.imageRef]} alt="" />;
};

const mapStateToProps = (state, { match }) => {
  let route = getRouteBySlug(state, { slug: match.params.pageSlug });
  return {
    image: getImageById(state, { imageId: route.linkedImageId[0] })
  };
};

const PageImageConnected = connect(mapStateToProps)(PageImage);

const PageImagesRouted = withRouter(PageImageConnected);

export { PageImagesRouted };
