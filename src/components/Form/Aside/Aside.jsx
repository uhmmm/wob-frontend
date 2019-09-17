import React from 'react'
import styled from '@emotion/styled'
import { Switch, Route } from 'react-router-dom'

import { type } from '../../../styles'

const AsideContainer = styled.aside({})

const Title = styled.h1({ ...type.title.medium })

const Aside = ({ match }) => {
  return (
    <AsideContainer>
      <Title>Aside: {match.params.asideSlug}</Title>
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
