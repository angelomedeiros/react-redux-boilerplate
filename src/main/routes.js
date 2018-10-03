import React from 'react'
import { Route, Redirect, Switch } from 'react-router-dom'

import Home from '../home'

export default props => (
  <Switch>
    <Route path='/' component={Home} />
    <Redirect from='*' to='/' />
  </Switch>
)