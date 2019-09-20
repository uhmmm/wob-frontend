import React from 'react'
import styled from '@emotion/styled'
import { Switch, Route } from 'react-router-dom'

import { colors, type } from '../../../styles'
import asideData from '../../../data/asides'

const AsideContainer = styled.aside({
  position: 'absolute',
  top: '16rem',
  left: 0,
  width: '40rem',
  padding: '4rem',
  minHeight: '100vh',
  background: colors.darkestWhite,
  boxShadow: '1px 1p',
  borderRadius: '0 10px 0 0'
})

const Title = styled.h1({
  ...type.title.small,
  padding: '0 0 2rem'
})
const Content = styled.p({ ...type.content.medium })

const Aside = ({ match }) => {
  let currAside = asideData.find(aside => aside.slug === match.params.asideSlug)
  return (
    <AsideContainer>
      <Title>{currAside.title}</Title>
      <Content>{currAside.content}</Content>
    </AsideContainer>
  )
}

const AsideRouter = () => {
  return (
    <Switch>
      <Route path="/form/:formStep/aside/:asideSlug" component={Aside}></Route>
    </Switch>
  )
}

export { Aside, AsideRouter }
