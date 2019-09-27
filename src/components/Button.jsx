import React from 'react'

import styled from '@emotion/styled'
import { FilledLinkRouted } from './FilledLink'

import { colors, type } from '../styles'

const ButtonSmall = styled.button(() => ({
  height: '2rem',
  background: colors.darkestGrey,
  border: 'unset',
  margin: '0 0.5rem',
  padding: '0 1rem',
  borderRadius: '10px',
  ...type.contentMono.small,
  color: colors.white,
  cursor: 'pointer',
  outline: 'unset',
  '&:hover': {
    background: colors.white,
    color: colors.darkestGrey
  }
}))

const ButtonMedium = styled.button(() => ({
  border: 'unset',
  margin: '0 0.5rem 0 0',
  padding: '0.5rem 3rem',
  borderRadius: '10px',
  ...type.contentMono.medium,
  color: colors.white,
  background: colors.black,
  cursor: 'pointer',
  outline: 'unset',
  '&:hover': {
    background: colors.white,
    color: colors.darkestGrey
  }
}))

const ButtonLarge = styled.button(() => ({
  border: 'unset',
  padding: '1rem 5rem',
  borderRadius: '10px',
  ...type.content.medium,
  color: colors.darkestGrey,
  background: colors.yellow,
  cursor: 'pointer',
  outline: 'unset',
  '&:hover': {
    background: colors.white
  }
}))

const buttonTypes = {
  buttonSmall: ButtonSmall,
  buttonMedium: ButtonMedium,
  buttonLarge: ButtonLarge
}

const Button = ({ element, btnType }) => {
  let SelectedButton = buttonTypes[btnType]
  if (element)
    return element.linkRouteId ? (
      <FilledLinkRouted linkRouteId={element.linkRouteId[0]}>
        <SelectedButton>{element.text}</SelectedButton>
      </FilledLinkRouted>
    ) : (
      <SelectedButton>{element.text}</SelectedButton>
    )
  else {
    return null
  }
}

export { Button }
