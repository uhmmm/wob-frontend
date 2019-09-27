import React from 'react'

import { ListBubbleConnected } from './ListBubble'
import { ListInfoConnected } from './ListInfo'
import { ListCheckboxConnected } from './ListCheckbox'
import { SpecificDocuments } from './SpecificDocuments'
import { InstituteCard } from './InstituteCard'
import { ContactDetailsConnected } from './ContactDetails'
import { DateTimePicker } from './DateTimePicker'
import { DocumentTypesConnected } from './DocumentTypes'
import { Button } from './Button'
import { TextField } from './TextField'
import { Title } from './Title'
import { TextBlock } from './TextBlock'

const ElementResolver = ({ el }) => {
  switch (el.type) {
    case 'title':
      return <Title key={el.elementId} element={el} />
    case 'content':
      return <TextBlock key={el.elementId} el={el} />
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
      return <SpecificDocuments key={el.elementId} />
    case 'formDocumentTypesSpecific':
      return <DocumentTypesConnected key={el.elementId} multiple />
    case 'formDocumentTypesAll':
      return <DocumentTypesConnected key={el.elementId} />
    case 'formDateTimePicker':
      return <DateTimePicker key={el.elementId} />
    case 'formOnderwerp':
      return <TextField key={el.elementId} />
    case 'buttonSmall':
      return <Button key={el.elementId} btnType={'small'} />
    case 'buttonMedium':
      return <Button key={el.elementId} btnType={'medium'} />
    case 'buttonLarge':
      return <Button key={el.elementId} btnType={'large'} />
    default:
      return <div key={el.elementId}>ViewError: Element can not resolved</div>
  }
}

export { ElementResolver }
