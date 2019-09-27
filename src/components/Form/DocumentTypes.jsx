import React from 'react'
import { connect } from 'react-redux'

import { Tabs } from './Tabs'
import { ListCheckbox } from './List/ListCheckbox'

import { getElementsByPartOf } from '../../reducers/elements'

const DocumentTypes = ({ elements, multiple }) => {
  return (
    <>
      {multiple && <Tabs />}
      <ListCheckbox elements={elements} />
    </>
  )
}

const mapStateToProps = state => {
  return {
    elements: getElementsByPartOf(state, 'formDocumentTypes')
  }
}

const DocumentTypesConnected = connect(mapStateToProps)(DocumentTypes)

export { DocumentTypesConnected }
