import React from 'react'
import styled from '@emotion/styled'
import { colors } from '../styles'

import { ListBubbleConnected } from './ListBubble'
import { ListInfoConnected } from './ListInfo'
import { ListCheckboxConnected } from './ListCheckbox'
import { SpecificDocumentsConnected } from './SpecificDocuments'
import { InstituteCard } from './InstituteCard'
import { ContactDetailsConnected } from './ContactDetails'
import { DateTimePicker } from './DateTimePicker'
import { DocumentTypesConnected } from './DocumentTypes'
import { Button } from './Button'
import { TextFieldConnected } from './TextField'
import { Title } from './Title'
import { TextBlock } from './TextBlock'
import { Markdown } from './Markdown'
import { CallToAction } from './CallToAction'

const Container = styled.div({})

export const elements = {
  root: Container,

  titleLarge: props => <Title titleType="titleLarge" {...props} />,
  titleMedium: props => <Title titleType="titleMedium" {...props} />,
  titleSmall: props => <Title titleType="titleSmall" {...props} />,
  titleXSmall: props => <Title titleType="titleXSmall" {...props} />,
  titleContent: props => <Title titleType="titleContent" {...props} />,

  textLarge: props => <TextBlock textType="textLarge" {...props} />,
  textMedium: props => <TextBlock textType="textMedium" {...props} />,

  markdown: Markdown,

  buttonLarge: props => <Button btnType="buttonSmall" {...props} />,
  buttonMedium: props => <Button btnType="buttonMedium" {...props} />,
  buttonSmall: props => <Button btnType="buttonLarge" {...props} />,

  listBubble: ListBubbleConnected,
  listCheck: ListCheckboxConnected,
  listInfo: ListInfoConnected,

  SpecificDocumentsConnected,
  InstituteCard,
  ContactDetailsConnected,
  DateTimePicker,
  DocumentTypesConnected,

  TextFieldConnected,

  CallToAction
}
