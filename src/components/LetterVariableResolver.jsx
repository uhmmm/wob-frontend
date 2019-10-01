import React from 'react'
import { connect } from 'react-redux'
// import styled from '@emotion/styled'

// import { getLetterById } from '../reducers/letterElements'

const LetterVariableResolver = ({ template, variable }) => {
  return <>{template}</>
}

const mapStateToProps = (state, { letterElId }) => {
  //   let letterEl = getLetterById(state, letterElId)
  return {
    // letterEl
  }
}

const LetterVariableResolverConnected = connect(mapStateToProps)(
  LetterVariableResolver
)

export { LetterVariableResolverConnected }
