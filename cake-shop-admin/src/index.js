import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'

import './index.css'
import Login from './pages/Login'
import Signup from './pages/Signup'
import NoFound from './pages/NoFound'
import Admin from './layouts/Admin'
import Dashboard from './routes/Dashboard'
import ProductCheck from './routes/Product/Check'
import CheckManager from './routes/Shop/CheckManager'
import AddManager from './routes/Shop/AddManager'

import { CAKE_SHOP_AUTH_TOKEN } from './constant'
import { ManagerContext } from './store/manager'
import registerServiceWorker from './registerServiceWorker'

const isLogin = localStorage.getItem(CAKE_SHOP_AUTH_TOKEN)

class App extends React.Component {
  state = {
    manager: {
      name: '',
      email: ''
    }
  }
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
              render={() => (isLogin ? <Redirect to="/admin" /> : <Login login={this.login} />)}
            />
            <Route exact path="/login" render={() => <Login login={this.login} />} />
            <Route exact path="/signup" component={Signup} />
            <Route
              path="/admin"
              render={() => (
                <Admin>
                  <Dashboard />
                </Admin>
              )}
            />
            <Route
              path="/product/check"
              render={() => (
                <Admin>
                  <ProductCheck />
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
