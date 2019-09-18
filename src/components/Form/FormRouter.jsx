import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'

import { FormLayout } from './FormLayout'

const formSteps = [
  { name: 'start' },
  { name: 'contact-details' },
  { name: 'role' },
  { name: 'institute' },
  { name: 'subject' },
  { name: 'quantity' },
  { name: 'specific' },
  { name: 'specific-types' },
  { name: 'everything' },
  { name: 'everything-types' },
  { name: 'finish' },
  { name: 'extras}' }
]

const formRoutes = formSteps.map(route => {
  return { ...route, path: `/form/${route.name}` }
})

const FormRouter = () => (
  <Switch>
    <Route path={formRoutes.map(route => route.path)} component={FormLayout} />
    <Redirect to="/404-not-found" />
  </Switch>
)

export { formSteps, formRoutes, FormRouter }
