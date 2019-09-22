import React from 'react'
import styled from '@emotion/styled'
import { Switch, Route } from 'react-router-dom'

import { colors, type } from '../../../styles'

// import contentData from '../../../data/content'
// console.log(contentData)
// let currItems = contentData.find(
//   content => content.routeSlug[0] === match.params.asideSlug
// )
// console.log(currItems)

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
  return (
    <AsideContainer>
      <Title>title</Title>
      <Content>content</Content>
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
