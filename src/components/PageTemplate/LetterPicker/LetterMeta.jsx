import React from "react";
import styled from "@emotion/styled";

import letterThumb from "./letter-thumb.png";
import { Button } from "../../Shared/Button";

import { type, colors } from "../../../styles";

const LetterMetaContainer = styled.div({
  position: "relative"
});

const Border = styled.div({
  position: "absolute",
  height: "100%",
  width: "100%",
  border: `1px dashed ${colors.darkGrey}`,
  borderRadius: "10px"
});

const Background = styled.div({
  position: "absolute",
  top: "0.4rem",
  left: "0.4rem",
  height: "100%",
  width: "100%",
  background: colors.lightestGrey,
  borderRadius: "10px"
});

const ContentContainer = styled.div({
  position: "relative",
  display: "grid",
  padding: "2rem",
  gridTemplateColumns: "1fr 3fr",
  gridColumnGap: "2rem"
});

const LetterMetaSection = styled.div({});

const Img = styled.img({ width: "100%" });
const Title = styled.h5({ ...type.content.mediumHead });
const Adressee = styled.label({ ...type.contentMono.medium });
const Description = styled.p({ ...type.content.medium });

const ButtonContainer = styled.div({
  position: "absolute",
  right: "1rem",
  bottom: "-1rem"
});

const LetterMeta = ({ letterId, letter }) => (
  <LetterMetaContainer>
    <Background />
    <Border />
    <ContentContainer>
      <LetterMetaSection>
        <Img src={letterThumb} />
      </LetterMetaSection>
      <LetterMetaSection>
        <Title>Milieubrief opvragen NO2 gegevens gemeente</Title>
        <Adressee>Ministerie Milieu en Waterstaat</Adressee>
        <Description>
          Op 20-03-2019 is er een meting van stikstof in de Maas geweest die
          nooit is gepubliceerd, wij willen deze graag ontvangen.
        </Description>
      </LetterMetaSection>
    </ContentContainer>
    <ButtonContainer>
      <Button btnType="buttonSmall" element={{ text: "DUPLICEER" }} />
      <Button btnType="buttonSmall" element={{ text: "DOWNLOAD" }} />
    </ButtonContainer>
  </LetterMetaContainer>
);

export { LetterMeta };
