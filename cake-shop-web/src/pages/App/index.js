import React, { Component } from 'react'
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom'

import './style.css'
import Home from '../Home'
import Category from '../Category'
import Cart from '../Cart'
import Mine from '../Mine'
import NoMatch from '../Nomatch'

import AppBottomBar from '../../components/AppBottomBar'

export default class App extends Component {
  // {/* <Progress percent={80} position="fixed" /> */}
  render() {
    return (
      <BrowserRouter>
        <main className="app">
          <Switch>
            <Route exact path="/home" component={Home} />
            <Route exact path="/cart" component={Cart} />
            <Route exact path="/mine" component={Mine} />
            <Route exact path="/category" component={Category} />
            <Redirect from="/" to="/home" />
            <Route component={NoMatch} />
          </Switch>
          <AppBottomBar />
        </main>
      </BrowserRouter>
    )
  }
}
