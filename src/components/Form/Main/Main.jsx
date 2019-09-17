import React from 'react'
import { Switch, Route } from 'react-router-dom'

import { Start } from './Start'

const MainRouter = () => {
  return (
    <Switch>
      <Route path="/form/start" component={Start} />
      <Route path="/form/role" component={Start} />
      <Route path="/form/institute" component={Start} />
      <Route path="/form/subject" component={Start} />
      <Route path="/form/quantity" component={Start} />
      <Route path="/form/specific" component={Start} />
      <Route path="/form/specific-types" component={Start} />
      <Route path="/form/everything" component={Start} />
      <Route path="/form/everything-types" component={Start} />
      <Route path="/form/finish" component={Start} />
      <Route path="/form/extras" component={Start} />
      <Route path="/form/not-found" component={Start} />
    </Switch>
  )
}

export { MainRouter }
