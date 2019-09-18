import React from 'react'
import { Switch, Route } from 'react-router-dom'
import { upperFirst, camelCase } from 'lodash'

import { formRoutes } from '../FormRouter'

import { Start } from './Start'
import { ContactDetails } from './ContactDetails'

const steps = { Start, ContactDetails }

const MainRouter = () => {
  return (
    <Switch>
      {formRoutes.map(route => (
        <Route
          key={route.name}
          path={route.path}
          component={steps[upperFirst(camelCase(route.name))]}
        />
      ))}
    </Switch>
  )
}

export { MainRouter }
