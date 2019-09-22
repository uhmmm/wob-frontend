import React from 'react'
import styled from '@emotion/styled'
import { Switch, Route } from 'react-router-dom'
import { connect } from 'react-redux'

import { colors, type } from '../../../styles'
import { getContentsBySlug } from '../../../reducers/contents'

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

const Aside = ({ contents }) => {
  return (
    <AsideContainer>
      {contents.map(contentItem => {
        switch (contentItem.type) {
          case 'title':
            return <Title key={contentItem.recordId}>{contentItem.text}</Title>
          case 'content':
            return <Text key={contentItem.recordId}>{contentItem.text}</Text>
          default:
            return null
        }
      })}
    </AsideContainer>
  )
}

const mapStateToProps = (state, { match }) => {
  return {
    contents: getContentsBySlug({ state, slug: match.params.asideSlug })
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
