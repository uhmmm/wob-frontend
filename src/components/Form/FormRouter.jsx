import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import { kebabCase } from 'lodash'

import { FormLayout } from './FormLayout'

const formSteps = [
  { routeId: 1, name: 'Start' },
  { routeId: 2, name: 'Contact Gegevens' },
  { routeId: 3, name: 'Rol' },
  { routeId: 4, name: 'Instituut' },
  { routeId: 5, name: 'Onderwerp' },
  { routeId: 6, name: 'Kwantiteit' },
  { routeId: 7, name: 'Specifieke documenten' },
  { routeId: 8, name: 'Specifieke documenttypen' },
  { routeId: 9, name: 'Alles over onderwerp' },
  { routeId: 10, name: 'Alles over documenttypen' },
  { routeId: 11, name: 'Finish' },
  { routeId: 12, name: 'Extras' },
  { routeId: 13, name: '404 Niet gevonden' }
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
