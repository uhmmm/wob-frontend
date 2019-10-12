import React from 'react'
import { connect } from 'react-redux'

import { Tabs } from './Tabs'
// import { ListCheckbox } from './ListCheckbox'

import { getElementsByProperty } from '../reducers/formElements'

const DocumentTypes = ({ elements, multiple }) => {
  return (
    <>
      {multiple && <Tabs />}
      {/* <ListCheckbox elements={elements} /> */}
    </>
  )
}

const mapStateToProps = state => {
  return {
    elements: getElementsByProperty(state, { partOf: ['formDocumentTypes'] })
  }
}

const DocumentTypesConnected = connect(mapStateToProps)(DocumentTypes)

export { DocumentTypesConnected }
