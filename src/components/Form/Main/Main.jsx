import React from 'react'
import { Switch, Route } from 'react-router-dom'
import styled from '@emotion/styled'
import { connect } from 'react-redux'

import { Bubble } from '../../Bubble/Bubble'
import { InfoLinkRouted } from './InfoLink'

import { type } from '../../../styles'
import { getContentsBySlug } from '../../../reducers/contents'

const MainContainer = styled.main({})
const Title = styled.h1({ ...type.title.medium, margin: '0 0 2rem' })
const TextContainer = styled.div({ margin: '0 0 2rem' })
const Text = styled.p({ ...type.content.medium })
const TextSpan = styled.span({ margin: '0 1rem 0 0' })
const ListItemContainer = styled.li({
  ...type.content.medium,
  display: 'flex',
  margin: '0 0 1rem',
  '&:last-of-type': {
    margin: '0 0 2rem'
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
    <TextContainer>
      <Text>
        <TextSpan>
          Kun je de documenten op een andere manier in handen krijgen,
          bijvoorbeeld door het gewoon te vragen of door ze ergens anders te
          zoeken?
        </TextSpan>
        <InfoLinkRouted to="informatieverzoeken" />
      </Text>
    </TextContainer>
  )
}

const Main = ({ contents }) => {
  return (
    <MainContainer>
      {contents.map(contentItem => {
        switch (contentItem.type) {
          case 'title':
            return <Title key={contentItem.recordId}>{contentItem.text}</Title>
          case 'content':
            return (
              <TextBlock
                key={contentItem.recordId}
                text={contentItem.text}
                linkSlug={contentItem.linkSlug}
              />
            )
          case 'listItem/bubble':
            return (
              <ListItemBubble key={contentItem.recordId} number="1">
                {contentItem.text}
              </ListItemBubble>
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
    contents: getContentsBySlug({ state, slug: match.params.formSlug })
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
