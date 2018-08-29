import React, { Component } from 'react'
import { WingBlank } from 'antd-mobile'

import './style.css'
import Home from '../Home'
import Mine from '../Mine'
import Category from '../Category'
import AppBottomBar from '../../components/AppBottomBar'

export default class App extends Component {
  state = {
    selectedTab: 'home'
  }

  handleChangeView = selectedTab => {
    this.setState({ selectedTab })
  }

  render() {
    return (
      <React.Fragment>
        <WingBlank size="sm">
          <main className="app">
            {/* <Progress percent={80} position="fixed" /> */}
            <Home />
          </main>
        </WingBlank>
        <AppBottomBar
          selectedTab={this.state.selectedTab}
          handleChangeView={this.handleChangeView}
        />
      </React.Fragment>
    )
  }
}
