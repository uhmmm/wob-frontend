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
import { TextFieldConnected } from './TextField'
import { Title } from './Title'
import { TextBlock } from './TextBlock'
import { Markdown } from './Markdown'
import { CallToAction } from './CallToAction'
import { Input } from './Input'

const Container = styled.div({})
const List = styled.ul({})
const ListItem = styled.li({})
const Label = styled.label({})

export const elements = {
  root: Container,
  container: Container,
  field: Container,

  titleLarge: props => <Title titleType="titleLarge" {...props} />,
  titleMedium: props => <Title titleType="titleMedium" {...props} />,
  titleSmall: props => <Title titleType="titleSmall" {...props} />,
  titleXSmall: props => <Title titleType="titleXSmall" {...props} />,
  titleContent: props => <Title titleType="titleContent" {...props} />,

  textLarge: props => <TextBlock textType="textLarge" {...props} />,
  textMedium: props => <TextBlock textType="textMedium" {...props} />,

  markdown: Markdown,

  buttonLarge: props => <Button btnType="buttonLarge" {...props} />,
  buttonMedium: props => <Button btnType="buttonMedium" {...props} />,
  buttonSmall: props => <Button btnType="buttonSmall" {...props} />,

  listBubble: ListItemBubbleContainer,
  listItemBubble: ListItemBubble,
  listCheck: List,
  listItemCheckYellow: ListItemCheckbox,
  listInfo: ListInfoContainer,
  listItemInfo: ListItemInfo,
  listParticipant: List,
  listItemParticipant: ListItem,
  listForm: List,

  inputSmall: props => <Input {...props} />,
  label: Label,

  SpecificDocumentsConnected,
  instituteCard: InstituteCard,
  dateTimePicker: DateTimePicker,
  DocumentTypesConnected,

  TextFieldConnected,

  CallToAction
}
