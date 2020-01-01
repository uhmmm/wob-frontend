import React from "react";
import styled from "@emotion/styled";

import { LetterMeta } from "./LetterMeta";
import { Title } from "../../Title";

const LetterMetaListContainer = styled.div({
  padding: "8rem"
});

const LetterMetaListInner = styled.div({
  display: "grid",
  gridTemplateColumns: "1fr 1fr",
  gridColumnGap: "4rem",
  gridRowGap: "4rem"
});

const LetterMetaList = ({
  letters = [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }]
}) => (
  <LetterMetaListContainer>
    <Title element={{ text: "Opgeslagen verzoeken" }} titleType="titleSmall" />
    <LetterMetaListInner>
      {letters.map(letter => (
        <LetterMeta key={letter.id} letterId={letter.id} />
      ))}
    </LetterMetaListInner>
  </LetterMetaListContainer>
);

export { LetterMetaList };
