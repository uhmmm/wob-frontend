import React from 'react'
import styled from '@emotion/styled'

const MainArea = styled.main({})
const ImageArea = styled.aside({})
const LetterOverlay = styled.aside({})
const LetterOverlayButton = styled.button({})
const PaginationButtons = styled.div({})

const LayoutForm = () => (
  <>
    <MainArea />
    <ImageArea />
    <LetterOverlay />
    <LetterOverlayButton />
    <LetterOverlayButton />
    <PaginationButtons />
  </>
)

export { LayoutForm }
