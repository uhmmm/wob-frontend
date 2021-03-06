import React from "react";
import styled from "@emotion/styled";

import { ListItemBubble } from "../Shared/Bubble/ListBubble";
import { ListItemInfo } from "./ListInfo";
import { ListItemCheckbox } from "../Shared/Checkbox/ListCheckbox";
import { DateTimePicker } from "./DateTimePicker";

import { Button } from "../Shared/Button/Button";
import { TextField } from "../Shared/TextField";
import { Title } from "../Shared/Title";
import { TextBlock } from "./TextBlock";
import { Markdown } from "../Shared/Markdown";
import { CallToAction } from "../PageTemplate/CallToAction";
import { Input } from "../Shared/Input/Input";

import { InstituteCard } from "./Institute/InstituteCard";
// import { SpecificDocumentsConnected } from './SpecificDocuments'
// import { DocumentTypesConnected } from './DocumentTypes'

import { type, colors } from "../../styles";

import { ContainerWithTabs } from "./Tabs";

const RootContainer = styled.div({ height: "100%" });
const Container = styled.div({});

const List = styled.ul({});
const ListItem = styled.li({});
const Label = styled.label({
  ...type.contentMono.medium,
  color: colors.darkestGrey
});
const Span = styled.span({});

export const elements = {
  root: RootContainer,
  container: Container,
  field: Container,

  titleLarge: props => <Title titleType="titleLarge" {...props} />,
  titleMedium: props => <Title titleType="titleMedium" {...props} />,
  titleSmall: props => <Title titleType="titleSmall" {...props} />,
  titleXSmall: props => <Title titleType="titleXSmall" {...props} />,
  titleContent: props => <Title titleType="titleContent" {...props} />,

  textLarge: props => <TextBlock textType="textLarge" {...props} />,
  textMedium: props => <TextBlock textType="textMedium" {...props} />,

  markdownWide: props => <Markdown spacing="wide" {...props} />,
  markdownNormal: props => <Markdown spacing="normal" {...props} />,

  buttonLarge: props => <Button btnType="buttonLarge" {...props} />,
  buttonMedium: props => <Button btnType="buttonMedium" {...props} />,
  buttonSmall: props => <Button btnType="buttonSmall" {...props} />,

  listBubble: List,
  listItemBubble: ListItemBubble,
  listCheck: List,
  listItemCheckYellow: ListItemCheckbox,
  listItemCheckYellowIndent: props => (
    <ListItemCheckbox indented={true} {...props} />
  ),
  listItemCheckWhite: ListItemCheckbox,
  listItemCheckWhiteIndent: props => (
    <ListItemCheckbox indented={true} {...props} />
  ),
  listInfo: List,
  listItemInfo: ListItemInfo,
  listParticipant: List,
  listItemParticipant: ListItem,
  listForm: List,

  inputSmall: Input,
  inputLarge: TextField,
  label: Label,
  required: Span,

  refTab: ContainerWithTabs,

  instituteCard: InstituteCard,
  dateTimePicker: DateTimePicker,

  CallToAction
};
