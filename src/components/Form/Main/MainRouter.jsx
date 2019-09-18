import React from 'react'
import { Switch, Route } from 'react-router-dom'

import steps from './steps'

import { formRoutes } from '../FormRouter'

const MainRouter = () => {
  return (
    <Switch>
      {formRoutes.map(route => (
        <Route
          key={route.kebabCaseName}
          path={route.path}
          component={steps[route.upperCamelCaseName]}
        />
      ))}
    </Switch>
  )
}

export { MainRouter }
