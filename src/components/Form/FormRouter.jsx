import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import { upperFirst, camelCase, kebabCase } from 'lodash'

import { FormLayout } from './FormLayout'

let formSteps = [
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

formSteps = formSteps.map(route => ({
  ...route,
  kebabCaseName: kebabCase(route.name),
  upperCamelCaseName: upperFirst(camelCase(route.name))
}))

const formRoutes = formSteps.map(route => {
  return { ...route, path: `/form/${route.kebabCaseName}` }
})

const FormRouter = () => (
  <Switch>
    <Route path={formRoutes.map(route => route.path)} component={FormLayout} />
    <Redirect to="/404-not-found" />
  </Switch>
)

export { formSteps, formRoutes, FormRouter }
