import React, { Component } from 'react'
import { TabBar } from 'antd-mobile'

import './style.css'

export default class AppBottomBar extends Component {
  state = {
    hidden: false
  }

  render() {
    const { handleChangeView, selectedTab } = this.props

    return (
      <TabBar
        noRenderContent={false}
        unselectedTintColor="#999"
        tintColor="#33A3F4"
        tabBarPosition="bottom"
        hidden={this.state.hidden}
      >
        <TabBar.Item
          icon={
            <span
              style={{
                width: '22px',
                height: '22px',
                background:
                  'url(https://gw.alipayobjects.com/zos/rmsportal/BTSsmHkPsQSPTktcXyTV.svg) center center /  21px 21px no-repeat'
              }}
            />
          }
          selectedIcon={
            <div
              style={{
                width: '22px',
                height: '22px',
                background:
                  'url(https://gw.alipayobjects.com/zos/rmsportal/ekLecvKBnRazVLXbWOnE.svg) center center /  21px 21px no-repeat'
              }}
            />
          }
          title="分类"
          key="分类"
          selected={selectedTab === 'category'}
          onPress={() => {
            this.setState((prevState, props) => ({ selectedTab: 'category' }))
            handleChangeView('category')
          }}
          data-seed="logId1"
        />
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
            handleChangeView('home')
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
            handleChangeView('mine')
          }}
        />
      </TabBar>
    )
  }
}
