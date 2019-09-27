import React from 'react'
import styled from '@emotion/styled'
import { connect } from 'react-redux'

import { ElementResolver } from './ElementResolver'

import { getElementsByProperty } from '../reducers/elements'

const ContentContainer = styled.section({})
const ContentColumn = styled.section({})

const ContentArea = ({ elements }) => {
  return (
    <ContentContainer>
      <ContentColumn>
        {elements[0].map(el => {
          return <ElementResolver key={el.elementId} el={el} />
        })}
      </ContentColumn>
      <ContentColumn>
        {elements[1].map(el => {
          return <ElementResolver key={el.elementId} el={el} />
        })}
      </ContentColumn>
    </ContentContainer>
  )
}

const mapStateToProps = (state, { routeId }) => {
  return {
    elements: [
      getElementsByProperty(state, {
        partOf: ['pageBlock/1']
      }),
      getElementsByProperty(state, {
        partOf: ['pageBlock/2']
      })
    ]
  }
}

const ContentAreaConnected = connect(mapStateToProps)(ContentArea)

export { ContentAreaConnected }
