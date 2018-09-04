import React, { Component } from 'react'
import { List } from 'antd-mobile'
import AppNavBar from '../../components/AppNavBar'

const { Item } = List

export default class Detail extends Component {
  state = { isLoading: true }

  componentDidMount() {}

  onClick = () => {}

  render() {
    return (
      <main className="app-home">
        <AppNavBar icon="back" onClick={this.onClick}>
          我的
        </AppNavBar>
      </main>
    )
  }
}
