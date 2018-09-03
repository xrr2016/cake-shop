import React, { Component } from 'react'
import { TabBar } from 'antd-mobile'
import { withRouter } from 'react-router-dom'

import './style.css'

class AppBottomBar extends Component {
  state = {
    selectedTab: 'home',
    hidden: false
  }

  render() {
    const { selectedTab } = this.state
    const { history } = this.props
    return (
      <nav className="app-bottom-bar">
        <TabBar
          noRenderContent={false}
          unselectedTintColor="#999"
          tintColor="#33A3F4"
          tabBarPosition="bottom"
          hidden={this.state.hidden}
        >
          <TabBar.Item
            icon={
              <div
                style={{
                  width: '22px',
                  height: '22px',
                  background:
                    'url(https://zos.alipayobjects.com/rmsportal/psUFoAMjkCcjqtUCNPxB.svg) center center /  21px 21px no-repeat'
                }}
              />
            }
            selectedIcon={
              <div
                style={{
                  width: '22px',
                  height: '22px',
                  background:
                    'url(https://zos.alipayobjects.com/rmsportal/IIRLrXXrFAhXVdhMWgUI.svg) center center /  21px 21px no-repeat'
                }}
              />
            }
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
            icon={{ uri: 'https://zos.alipayobjects.com/rmsportal/asJMfBrNqpMMlVpeInPQ.svg' }}
            selectedIcon={{
              uri: 'https://zos.alipayobjects.com/rmsportal/gjpzzcrPMkhfEqgbYvmN.svg'
            }}
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
            icon={{ uri: 'https://zos.alipayobjects.com/rmsportal/asJMfBrNqpMMlVpeInPQ.svg' }}
            selectedIcon={{
              uri: 'https://zos.alipayobjects.com/rmsportal/gjpzzcrPMkhfEqgbYvmN.svg'
            }}
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
