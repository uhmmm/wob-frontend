import React from 'react'
import { connect } from 'react-redux'
// import styled from '@emotion/styled'

import { getLetterElById } from '../reducers/letterElements'

const LetterElementResolver = ({ letterEl }) => {
  return letterEl ? (
    <div>
      {letterEl.name}
      {letterEl.children &&
        letterEl.children.map(letterElId => {
          return (
            <LetterElementResolverConnected
              key={letterElId}
              letterElId={letterElId}
            />
          )
        })}
    </div>
  ) : null
}

const mapStateToProps = (state, { letterElId }) => {
  let letterEl = getLetterElById(state, letterElId)
  return {
    letterEl
  }
}

const LetterElementResolverConnected = connect(mapStateToProps)(
  LetterElementResolver
)

export { LetterElementResolverConnected }
