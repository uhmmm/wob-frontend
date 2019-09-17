import React from 'react'
import styled from '@emotion/styled'
import { Switch, Route, Redirect } from 'react-router-dom'

import { LetterOverlay } from '../Letter/LetterOverlay'
import { ToggleBar } from './ToggleBar'
import { Pagination } from './Pagination'
import { MainRouter } from './Main'
import { ImagesRouter } from './Images/Images'
import { AsideRouter } from './Aside/Aside'

const FormLayoutContainer = styled.div({})

const FormLayout = () => (
  <FormLayoutContainer>
    <MainRouter />
    <ImagesRouter />
    <LetterOverlay />
    <ToggleBar />
    <AsideRouter />
    <Pagination />
  </FormLayoutContainer>
)

const FormRouter = () => (
  <Switch>
    <Route path="/form/start" component={FormLayout} />
    <Route path="/form/contact-details" component={FormLayout} />
    <Route path="/form/role" component={FormLayout} />
    <Route path="/form/institute" component={FormLayout} />
    <Route path="/form/subject" component={FormLayout} />
    <Route path="/form/quantity" component={FormLayout} />
    <Route path="/form/specific" component={FormLayout} />
    <Route path="/form/specific-types" component={FormLayout} />
    <Route path="/form/everything" component={FormLayout} />
    <Route path="/form/everything-types" component={FormLayout} />
    <Route path="/form/finish" component={FormLayout} />
    <Route path="/form/extras" component={FormLayout} />
    <Route path="/form/not-found" component={FormLayout} />
    <Redirect to="/form/not-found" />
  </Switch>
)

export { FormLayout, FormRouter }
