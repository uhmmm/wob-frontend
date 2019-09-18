import React from 'react'
import { Switch, Route } from 'react-router-dom'

import steps from './steps'

import { formRoutes } from '../FormRouter'

const MainRouter = () => {
  return (
    <Switch>
      <Route path="/form/start" component={steps['Start']} />
      <Route path="/form/contact-details" component={steps['ContactDetails']} />
      <Route path="/form/role" component={steps['Start']} />
      <Route path="/form/institute" component={steps['Start']} />
      <Route path="/form/subject" component={steps['Start']} />
      <Route path="/form/quantity" component={steps['Start']} />
      <Route path="/form/specific" component={steps['Start']} />
      <Route path="/form/specific-types" component={steps['Start']} />
      <Route path="/form/everything" component={steps['Start']} />
      <Route path="/form/everything-types" component={steps['Start']} />
      <Route path="/form/finish" component={steps['Start']} />
      <Route path="/form/extras" component={steps['Start']} />
      <Route path="/form/not-found" component={steps['Start']} />
    </Switch>
  )
}

export { MainRouter }
