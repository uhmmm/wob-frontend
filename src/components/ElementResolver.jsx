import React from 'react'

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

const ElementResolver = ({ el }) => {
  switch (el.type) {
    case 'titleLarge':
      return <Title key={el.elementId} element={el} titleType="titleLarge" />
    case 'titleMedium':
      return <Title key={el.elementId} element={el} titleType="titleMedium" />
    case 'titleSmall':
      return <Title key={el.elementId} element={el} titleType="titleSmall" />
    case 'titleXSmall':
      return <Title key={el.elementId} element={el} titleType="titleXSmall" />
    case 'titleContent':
      return <Title key={el.elementId} element={el} titleType="titleContent" />
    case 'textLarge':
      return <TextBlock key={el.elementId} element={el} textType="textLarge" />
    case 'textMedium':
      return <TextBlock key={el.elementId} element={el} textType="textMedium" />
    case 'markdown':
      return <Markdown key={el.elementId} element={el} />
    case 'buttonSmall':
      return <Button key={el.elementId} btnType={'buttonSmall'} element={el} />
    case 'buttonMedium':
      return <Button key={el.elementId} btnType={'buttonMedium'} element={el} />
    case 'buttonLarge':
      return <Button key={el.elementId} btnType={'buttonLarge'} element={el} />
    case 'listBubble':
      return <ListBubbleConnected key={el.elementId} routeId={el.routeId} />
    case 'listCheck':
      return <ListCheckboxConnected key={el.elementId} routeId={el.routeId} />
    case 'listInfo':
      return <ListInfoConnected key={el.elementId} routeId={el.routeId} />
    case 'formContactDetails':
      return <ContactDetailsConnected key={el.elementId} />
    case 'formInstitute':
      return <InstituteCard key={el.elementId} />
    case 'formSpecificDocuments':
      return <SpecificDocumentsConnected key={el.elementId} />
    case 'formDocumentTypesSpecific':
      return <DocumentTypesConnected key={el.elementId} multiple />
    case 'formDocumentTypesAll':
      return <DocumentTypesConnected key={el.elementId} />
    case 'formDateTimePicker':
      return <DateTimePicker key={el.elementId} />
    case 'formOnderwerp':
      return <TextFieldConnected key={el.elementId} />
    case 'callToAction':
      return <CallToAction key={el.elementId} />
    default:
      return (
        <div key={el.elementId}>ViewError: Element can not be resolved</div>
      )
  }
}

export { ElementResolver }
