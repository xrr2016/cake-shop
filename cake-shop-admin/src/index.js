import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom'

import './index.css'
import Login from './pages/Login'
import Signup from './pages/Signup'
import NoFound from './pages/NoFound'
import Admin from './layouts/Admin'
import Dashboard from './routes/Dashboard'
import ProductManage from './routes/Product/Manage'
import ProductAdd from './routes/Product/Add'
import ProductEdit from './routes/Product/Edit'
import CheckManager from './routes/Shop/CheckManager'
import AddManager from './routes/Shop/AddManager'

import { ManagerContext } from './store/manager'
import { CAKE_SHOP_AUTH_TOKEN, CAKE_SHOP_USER_INFO } from './constant'
import registerServiceWorker from './registerServiceWorker'

const isLogin = localStorage.getItem(CAKE_SHOP_AUTH_TOKEN)
const manager = JSON.parse(localStorage.getItem(CAKE_SHOP_USER_INFO))

class App extends React.Component {
  state = { manager }

  login = manager => {
    this.setState({ manager })
  }

  render() {
    return (
      <ManagerContext.Provider value={this.state}>
        <BrowserRouter>
          <Switch>
            <Route
              exact
              path="/"
              render={() => (isLogin ? <Redirect to="/dashboard" /> : <Login login={this.login} />)}
            />
            <Route exact path="/login" render={() => <Login login={this.login} />} />
            <Route exact path="/signup" component={Signup} />
            <Route
              path="/dashboard"
              render={() => (
                <Admin>
                  <Dashboard />
                </Admin>
              )}
            />
            <Route
              path="/product/manage"
              render={() => (
                <Admin>
                  <ProductManage />
                </Admin>
              )}
            />
            <Route
              path="/product/add"
              render={() => (
                <Admin>
                  <ProductAdd />
                </Admin>
              )}
            />
            <Route
              path="/product/edit/:productId"
              render={() => (
                <Admin>
                  <ProductEdit />
                </Admin>
              )}
            />
            <Route
              path="/shop/check_manager"
              render={() => (
                <Admin>
                  <CheckManager />
                </Admin>
              )}
            />
            <Route
              path="/shop/add_manager"
              render={() => (
                <Admin>
                  <AddManager />
                </Admin>
              )}
            />
            <Route component={NoFound} />
          </Switch>
        </BrowserRouter>
      </ManagerContext.Provider>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'))
registerServiceWorker()
