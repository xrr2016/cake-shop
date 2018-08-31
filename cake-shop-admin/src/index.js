import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'

import './index.css'
import Admin from './layouts/Admin'
import Account from './layouts/Account'
import Dashboard from './routes/Dashboard'
import ProductCheck from './routes/Product/Check'
import registerServiceWorker from './registerServiceWorker'

import { CAKE_SHOP_AUTH_TOKEN } from './constant'

const isLogin = localStorage.getItem(CAKE_SHOP_AUTH_TOKEN)

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/account" component={Account} />
          <Route exact path="/" render={() => (isLogin ? <Redirect to="/admin" /> : <Account />)} />
          <Route
            exact
            path="/admin"
            render={() => (
              <Admin>
                <Dashboard />
              </Admin>
            )}
          />
          <Route
            exact
            path="/product/check"
            render={() => (
              <Admin>
                <ProductCheck />
              </Admin>
            )}
          />
          <Route render={() => <p>404!</p>} />
        </Switch>
      </BrowserRouter>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'))
registerServiceWorker()
