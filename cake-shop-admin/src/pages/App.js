import React, { Component } from 'react'
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'

import Login from './Login'
import Signup from './Signup'
import NoFound from './NoFound'
import Admin from '../layouts/Admin'
import routes from '../routes'

const isLogin = localStorage.getItem('CAKE_SHOP_TOKEN')

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/login" component={Login} />
          <Route exact path="/signup" component={Signup} />
          <Route path="/" render={() => (isLogin ? <Redirect to="/dashboard" /> : <Login />)} />
          <Admin>
            <Route exact path="/dashboard" component={routes.Dashboard} />
            <Route exact path="/product/check" component={routes.ProductCheck} />
          </Admin>
        </Switch>
      </BrowserRouter>
    )
  }
}

export default App
