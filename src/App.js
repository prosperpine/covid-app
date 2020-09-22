import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { Header } from './Header'
import { Total } from './Total'
import { Country } from './Country'

export const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Switch>

        <Route exact path="/">
          <Total />
          <Country />
        </Route>
        <Route>

        </Route>
      </Switch>
    </BrowserRouter>
  )
}
