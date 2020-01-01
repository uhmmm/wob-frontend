import styled from "@emotion/styled";

import { type } from "../../../styles";

let LetterElSection = styled.div({});
let LetterElContainer = styled.div({ padding: "0 0 1rem 0" });
let LetterElParagraph = styled.p({
  ...type.content.medium,
  padding: "0 0 1rem 0"
});
let LetterElList = styled.ul({ padding: "0 0 1rem 0", listStyle: "none" });
let LetterElOrderedList = styled.ol({
  padding: "0 0 1rem 2rem"
});
let LetterElListItem = styled.li({
  display: "list-item",
  ...type.content.medium,
  listStyle: "inherit"
});
let LetterElHeader = styled.h3({
  ...type.contentMono.medium,
  padding: "0 0 1rem 0"
});
let LetterElDate = styled.div({
  ...type.content.medium,
  padding: "0 0 1rem 0"
});
let LetterElSpan = styled.span({});
let LetterSignature = styled.div({ padding: "4rem 0rem" });

export const letterElementTypes = {
  root: LetterElSection,
  container: LetterElContainer,
  paragraph: LetterElParagraph,
  list: LetterElList,
  orderedList: LetterElOrderedList,
  refList: LetterElOrderedList,
  listItem: LetterElListItem,
  header: LetterElHeader,
  date: LetterElDate,
  span: LetterElSpan,
  signature: LetterSignature
};
