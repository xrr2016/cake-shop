import React, { Component } from 'react'
import { TabBar } from 'antd-mobile'
import { withRouter } from 'react-router-dom'

import './style.css'

import home from '../../assets/bottoms/home.png'
import home_active from '../../assets/bottoms/home_active.png'
import cart from '../../assets/bottoms/cart.png'
import cart_active from '../../assets/bottoms/cart_active.png'
import mine from '../../assets/bottoms/mine.png'
import mine_active from '../../assets/bottoms/mine_active.png'

class AppBottomBar extends Component {
  state = {
    selectedTab: 'home',
    hidden: false
  }

  componentWillMount() {
    const selectedTab = window.location.pathname.replace('/', '')
    this.setState({ selectedTab })
  }

  render() {
    const { selectedTab } = this.state
    const { history } = this.props

    return (
      <nav className="app-bottom-bar">
        <TabBar
          noRenderContent={false}
          tintColor="#108ee9"
          unselectedTintColor="#999"
          tabBarPosition="bottom"
          hidden={this.state.hidden}
        >
          <TabBar.Item
            icon={{ uri: home }}
            selectedIcon={{ uri: home_active }}
            title="首页"
            key="home"
            selected={selectedTab === 'home'}
            onPress={() => {
              this.setState({
                selectedTab: 'home'
              })
              history.push('/home')
            }}
          />
          <TabBar.Item
            icon={{ uri: cart }}
            selectedIcon={{ uri: cart_active }}
            title="购物车"
            key="cart"
            selected={selectedTab === 'cart'}
            onPress={() => {
              this.setState({
                selectedTab: 'cart'
              })
              history.push('/cart')
            }}
          />
          <TabBar.Item
            icon={{ uri: mine }}
            selectedIcon={{ uri: mine_active }}
            title="我的"
            key="mine"
            selected={selectedTab === 'mine'}
            onPress={() => {
              this.setState({
                selectedTab: 'mine'
              })
              history.push('/mine')
            }}
          />
        </TabBar>
      </nav>
    )
  }
}

export default withRouter(AppBottomBar)
