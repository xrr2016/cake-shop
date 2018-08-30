import React, { Component } from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import './App.css'
// import Account from '../layouts/Account'
import Dashboard from '../layouts/Dashboard'
import NoFound from './400'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Dashboard} />
          <Route component={NoFound} />
        </Switch>
      </BrowserRouter>
    )
  }
}

export default App
