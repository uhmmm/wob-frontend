import React from 'react'
import styled from '@emotion/styled'

import { Bubble } from '../Bubble/Bubble'

const PaginationContainer = styled.div({
  position: 'absolute',
  left: 'calc(50% - 2rem)',
  bottom: '8rem',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'space-between',
  height: '8rem'
})

const Pagination = () => (
  <PaginationContainer>
    <Bubble size="3" vOrient="negative"></Bubble>
    <Bubble
      size="4"
      hOrient="negative"
      vOrient="negative"
      bgInversed="true"
    ></Bubble>
  </PaginationContainer>
)

export { Pagination }
