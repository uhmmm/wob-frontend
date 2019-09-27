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

const ElementResolver = ({ el }) => {
  switch (el.type) {
    case 'title':
      return <Title key={el.elementId} element={el} />
    case 'content':
      return <TextBlock key={el.elementId} element={el} />
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
    default:
      return <div key={el.elementId}>ViewError: Element can not resolved</div>
  }
}

export { ElementResolver }
