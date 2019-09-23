import React from 'react'
import { Switch, Route } from 'react-router-dom'
import styled from '@emotion/styled'
import { connect } from 'react-redux'

import { InfoLinkRouted } from './InfoLink'
import { ListBubble } from '../List/ListBubble'

import { type } from '../../../styles'
import { getGroupedElementsBySlug } from '../../../reducers/elements'
import { getRouteById } from '../../../reducers/routes'

const MainContainer = styled.main({})
const Title = styled.h1({ ...type.title.medium, margin: '0 0 2rem' })
const Text = styled.p({ ...type.content.medium, margin: '0 0 2rem' })
const TextSpan = styled.span({ margin: '0 1rem 0 0' })

const TextBlock = ({ text, linkSlug }) => {
  return (
    <Text>
      <TextSpan>{text}</TextSpan>
      {linkSlug && <InfoLinkRouted to={linkSlug} />}
    </Text>
  )
}

const TextBlockConnected = connect((state, { linkRouteId }) => {
  return {
    linkSlug: linkRouteId && getRouteById({ state, routeId: linkRouteId }).slug
  }
})(TextBlock)

const Main = ({ groupedElements }) => {
  console.log(groupedElements)
  return (
    <MainContainer>
      {groupedElements &&
        groupedElements.base.map(el => {
          switch (el.type) {
            case 'title':
              return <Title key={el.elementId}>{el.text}</Title>
            case 'content':
              return (
                <TextBlockConnected
                  key={el.elementId}
                  text={el.text}
                  linkRouteId={el.linkRouteId && el.linkRouteId[0]}
                />
              )
            case 'listBubble':
              return (
                <ListBubble
                  key={el.elementId}
                  elements={groupedElements.listBubble}
                />
              )
            case 'listInfo':
              return (
                <ListBubble
                  key={el.elementId}
                  elements={groupedElements.listInfo}
                />
              )
            default:
              return null
          }
        })}
    </MainContainer>
  )
}

const mapStateToProps = (state, { match }) => {
  return {
    groupedElements: getGroupedElementsBySlug({
      state,
      slug: match.params.formSlug
    })
  }
}

const MainConnected = connect(
  mapStateToProps,
  {}
)(Main)

const MainRouter = () => {
  return (
    <Switch>
      <Route path="/form/:formSlug" component={MainConnected}></Route>
    </Switch>
  )
}

export { MainRouter }
