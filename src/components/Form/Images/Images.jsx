import React from 'react'
import styled from '@emotion/styled'
import { Switch, Route } from 'react-router-dom'

import man from './right.svg'

const FormImagesContainer = styled.main({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  height: '100%'
})
const Img = styled.img({ width: '100%' })

const Image = ({ source }) => (
  <FormImagesContainer>
    <Img src={source} alt="" />
  </FormImagesContainer>
)

const FrontalJournalist = () => (
  <Image source={man} animated="false" text="frontal" />
)
const TypingJournalist = () => (
  <Image source={man} animated="false" text="typing" />
)
const FormalInstitute = () => (
  <Image source={man} animated="false" text="institute" />
)
const Subject = () => <Image source={man} animated="false" text="subject" />
const SpecificDocs = () => (
  <Image source={man} animated="false" text="specific" />
)
const GeneralDocs = () => <Image source={man} animated="false" text="general" />
const Finish = () => <Image source={man} animated="false" text="finish" />
const Extra = () => <Image source={man} animated="false" text="extras" />

const ImagesRouter = () => {
  return (
    <Switch>
      <Route path="/form/start" component={FrontalJournalist} />
      <Route path="/form/contact-details" component={TypingJournalist} />
      <Route path="/form/role" component={TypingJournalist} />
      <Route path="/form/institute" component={FormalInstitute} />
      <Route path="/form/subject" component={Subject} />
      <Route path="/form/quantity" component={Subject} />
      <Route path="/form/specific" component={SpecificDocs} />
      <Route path="/form/specific-types" component={SpecificDocs} />
      <Route path="/form/everything" component={GeneralDocs} />
      <Route path="/form/everything-types" component={GeneralDocs} />
      <Route path="/form/finish" component={Finish} />
      <Route path="/form/extras" component={Extra} />
      <Route path="/form/not-found" component={Extra} />
    </Switch>
  )
}

export { Image, ImagesRouter }
