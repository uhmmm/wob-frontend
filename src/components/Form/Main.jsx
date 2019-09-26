import React from 'react'
import { Switch, Route } from 'react-router-dom'
import styled from '@emotion/styled'
import { connect } from 'react-redux'

import { Logo } from '../Logo/Logo'
import { ListBubble } from './List/ListBubble'
import { ListInfo } from './List/ListInfo'
import { ListCheckbox } from './List/ListCheckbox'
import { SpecificDocuments } from './SpecificDocuments'
import { InstituteCard } from './InstituteCard'
import { ContactDetails } from './ContactDetails'
import { DateTimePicker } from './DateTimePicker'
import { DocumentTypes } from './DocumentTypes'
import { ButtonMedium } from '../Button'
import { InfoLinkRouted } from './InfoLink'
import { FilledLinkRouted } from '../FilledLink'
import { TextField } from './TextField'

import { type, colors } from '../../styles'
import { getGroupedElementsBySlug } from '../../reducers/elements'

const MainContainer = styled.main({
  display: 'flex',
  flexDirection: 'column',
  height: '100%'
})

const LogoContainer = styled.div({
  margin: '0 0 4rem 0'
})

const Title = styled.h1({ ...type.title.medium, margin: '0 0 2rem' })

const Text = styled.p({
  ...type.content.medium,
  margin: '0 0 2rem',
  color: colors.darkestGrey
})

const TextSpan = styled.span({ margin: '0 1rem 0 0' })

const TextBlock = ({ text, linkRouteId }) => {
  return (
    <Text>
      <TextSpan>{text}</TextSpan>
      {linkRouteId && <InfoLinkRouted linkRouteId={linkRouteId} />}
    </Text>
  )
}

const Main = ({ groupedElements }) => {
  return (
    <MainContainer>
      <LogoContainer>
        <Logo />
      </LogoContainer>
      {groupedElements &&
        groupedElements.base.map(el => {
          switch (el.type) {
            case 'title':
              return <Title key={el.elementId}>{el.text}</Title>
            case 'content':
              return (
                <TextBlock
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
            case 'listCheck':
              return (
                <ListCheckbox
                  key={el.elementId}
                  elements={groupedElements.listCheck}
                />
              )
            case 'listInfo':
              return (
                <ListInfo
                  key={el.elementId}
                  elements={groupedElements.listInfo}
                />
              )
            case 'formContactDetails':
              return (
                <ContactDetails
                  key={el.elementId}
                  elements={groupedElements.formContactDetails}
                />
              )
            case 'formInstitute':
              return (
                <InstituteCard
                  key={el.elementId}
                  elements={groupedElements.formInstitute}
                />
              )
            case 'formSpecificDocuments':
              return (
                <SpecificDocuments
                  key={el.elementId}
                  elements={groupedElements.formSpecificDocuments}
                />
              )
            case 'formDocumentTypes':
              return (
                <DocumentTypes
                  key={el.elementId}
                  elements={groupedElements.formDocumentTypes}
                />
              )
            case 'formDateTimePicker':
              return (
                <DateTimePicker
                  key={el.elementId}
                  elements={groupedElements.formDateTimePicker}
                />
              )
            case 'formOnderwerp':
              return (
                <TextField
                  key={el.elementId}
                  elements={groupedElements.formOnderwerp}
                />
              )
            case 'buttonMedium':
              return el.linkRouteId ? (
                <FilledLinkRouted
                  key={el.elementId}
                  linkRouteId={el.linkRouteId[0]}
                >
                  <ButtonMedium>{el.text}</ButtonMedium>
                </FilledLinkRouted>
              ) : (
                <ButtonMedium key={el.elementId}>{el.text}</ButtonMedium>
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
