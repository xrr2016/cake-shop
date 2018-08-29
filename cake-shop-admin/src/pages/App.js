import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import './App.css'
import Account from '../layouts/Account'
import Dashboard from '../layouts/Dashboard'
import NoFound from './400'

class App extends Component {
  render() {
    return (
      <Router>
        <React.Fragment>
          <Route exact path="/" component={Account} />
          <Route exact path="/dashboard" component={Dashboard} />
          <Route component={NoFound} />
        </React.Fragment>
      </Router>
    )
  }
}

export default App
