import React from 'react'
import { Switch, Route } from 'react-router-dom'
import styled from '@emotion/styled'
import { connect } from 'react-redux'

import { Bubble } from '../../Bubble/Bubble'
import { InfoLinkRouted } from './InfoLink'

import { type } from '../../../styles'
import { getGroupedContentsBySlug } from '../../../reducers/contents'
import { getRouteById } from '../../../reducers/routes'

const MainContainer = styled.main({})
const Title = styled.h1({ ...type.title.medium, margin: '0 0 2rem' })
const Text = styled.p({ ...type.content.medium, margin: '0 0 2rem' })
const TextSpan = styled.span({ margin: '0 1rem 0 0' })
const ListBubble = styled.ul({ margin: '0 0 2rem' })
const ListItemContainer = styled.li({
  ...type.content.medium,
  display: 'flex',
  margin: '0 0 1rem',
  '&:last-of-type': {
    margin: '0 0 1rem'
  }
})
const Label = styled.label({ margin: '0 0 0 1rem', ...type.content.medium })

const ListItemBubble = ({ children, number }) => (
  <ListItemContainer>
    <Bubble number={number} />
    <Label>{children}</Label>
  </ListItemContainer>
)

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

const Main = ({ groupedContents }) => {
  console.log(groupedContents)
  return (
    <MainContainer>
      {groupedContents &&
        groupedContents.base.map(contentItem => {
          switch (contentItem.type) {
            case 'title':
              return (
                <Title key={contentItem.contentId}>{contentItem.text}</Title>
              )
            case 'content':
              return (
                <TextBlockConnected
                  key={contentItem.contentId}
                  text={contentItem.text}
                  linkRouteId={
                    contentItem.linkRouteId && contentItem.linkRouteId[0]
                  }
                />
              )
            case 'list/bubble':
              return (
                <ListBubble key={contentItem.contentId}>
                  {groupedContents['list/bubble'].map((contentItem, key) => {
                    return (
                      <ListItemBubble
                        key={contentItem.contentId}
                        number={key + 1}
                        linkRouteId={contentItem.linkRouteId}
                      >
                        {contentItem.text}
                      </ListItemBubble>
                    )
                  })}
                </ListBubble>
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
    groupedContents: getGroupedContentsBySlug({
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
