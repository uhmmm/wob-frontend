import React from 'react'
import styled from '@emotion/styled'

import { Letter } from './Letter/Letter'

const OverlayContainer = styled.aside({})

const LetterOverlay = () => (
  <OverlayContainer>
    <Letter></Letter>
  </OverlayContainer>
)

export { LetterOverlay }
