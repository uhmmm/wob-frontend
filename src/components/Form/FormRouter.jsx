import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import { kebabCase } from 'lodash'

import { FormLayout } from './FormLayout'

const formSteps = [
  { name: 'Start' },
  { name: 'Contact Details' },
  { name: 'Role' },
  { name: 'Institute' },
  { name: 'Subject' },
  { name: 'Quantity' },
  { name: 'Specific' },
  { name: 'Specific Types' },
  { name: 'Everything' },
  { name: 'Everything Types' },
  { name: 'Finish' },
  { name: 'Extras' },
  { name: 'Not Found' }
]

const formRoutes = formSteps.map(route => {
  return { ...route, path: `/form/${kebabCase(route.name)}` }
})

const FormRouter = () => (
  <Switch>
    <Route path={formRoutes.map(route => route.path)} component={FormLayout} />
    <Redirect to="/404-not-found" />
  </Switch>
)

export { formSteps, formRoutes, FormRouter }
