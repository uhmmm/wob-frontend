import React from "./node_modules/react";
import styled from "./node_modules/@emotion/styled";
import { cover } from "./node_modules/polished";

const gridColor = "rgba(254, 34, 0, 0.30)";
const gridColorLarge = "rgba(58, 58, 58, 1)";
const hGradient = `repeating-linear-gradient(to right,  ${gridColor} 0px, ${gridColor}  1px , transparent 1px , transparent 0.5rem)`;
const vGradient = `repeating-linear-gradient(to bottom,  ${gridColor}  0px, ${gridColor}  1px , transparent 1px , transparent 0.5rem)`;
const hGradientLarge = `repeating-linear-gradient(to right,  ${gridColorLarge} 0px, ${gridColorLarge}  1px , transparent 1px , transparent 4rem)`;
const vGradientLarge = `repeating-linear-gradient(to bottom,  ${gridColorLarge} 0px, ${gridColorLarge}  1px , transparent 1px , transparent 4rem)`;

const Container = styled.div({
  ...cover(),
  background: `${hGradientLarge}, ${vGradientLarge}, ${hGradient}, ${vGradient}`,
  zIndex: 1000
});

const Grid = () => <Container />;

export { Grid };
