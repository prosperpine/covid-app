import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import { Country } from './Country'

export const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <h1>hello</h1>
          <Country />
        </Route>
        <Route>

        </Route>
      </Switch>
    </BrowserRouter>
  )
}
