import React from 'react'
import styled from '@emotion/styled'
import { Switch, Route } from 'react-router-dom'
import { connect } from 'react-redux'

import { colors, type } from '../../../styles'
import { getElementsBySlug } from '../../../reducers/elements'

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
const Text = styled.p({ ...type.content.medium })

const Aside = ({ elements }) => {
  // console.log(elements)
  return (
    <AsideContainer>
      {elements &&
        elements.map(el => {
          switch (el.type) {
            case 'title':
              return <Title key={el.elementId}>{el.text}</Title>
            case 'content':
              return <Text key={el.elementId}>{el.text}</Text>
            default:
              return null
          }
        })}
    </AsideContainer>
  )
}

const mapStateToProps = (state, { match }) => {
  return {
    elements: getElementsBySlug({ state, slug: match.params.asideSlug })
  }
}

const AsideConnected = connect(
  mapStateToProps,
  {}
)(Aside)

const AsideRouter = () => {
  return (
    <Switch>
      <Route
        path="/form/:formStep/aside/:asideSlug"
        component={AsideConnected}
      ></Route>
    </Switch>
  )
}

export { Aside, AsideRouter }
