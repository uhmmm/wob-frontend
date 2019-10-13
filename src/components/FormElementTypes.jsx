import React from 'react'
import styled from '@emotion/styled'

import { ListItemBubble, ListItemBubbleContainer } from './ListBubble'
import { ListItemInfo, ListInfoContainer } from './ListInfo'
import { ListItemCheckbox } from './ListCheckbox'
import { SpecificDocumentsConnected } from './SpecificDocuments'
import { InstituteCard } from './InstituteCard'
import { DateTimePicker } from './DateTimePicker'
import { DocumentTypesConnected } from './DocumentTypes'
import { Button } from './Button'
import { TextField } from './TextField'
import { Title } from './Title'
import { TextBlock } from './TextBlock'
import { Markdown } from './Markdown'
import { CallToAction } from './CallToAction'
import { Input } from './Input'

import { type, colors } from '../styles'

const RootContainer = styled.div({ height: '100%' })
const Container = styled.div({})
const List = styled.ul({})
const ListItem = styled.li({})
const Label = styled.label({
  ...type.contentMono.medium,
  color: colors.darkestGrey
})
const Span = styled.span({})

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

  listBubble: ListItemBubbleContainer,
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
  listInfo: ListInfoContainer,
  listItemInfo: ListItemInfo,
  listParticipant: List,
  listItemParticipant: ListItem,
  listForm: List,

  inputSmall: Input,
  inputLarge: TextField,
  label: Label,
  required: Span,

  refTab: Container,

  SpecificDocumentsConnected,
  instituteCard: InstituteCard,
  dateTimePicker: DateTimePicker,
  DocumentTypesConnected,

  CallToAction
}
