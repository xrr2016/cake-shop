import React, { Component } from 'react'
import { Layout, Icon, Tabs } from 'antd'

import './style.css'
import AppSignup from '../../components/AppSignup'
import AppLogin from '../../components/AppLogin'

const { Content, Footer } = Layout
const { TabPane } = Tabs

export default class Account extends Component {
  render() {
    return (
      <Layout className="account">
        <Content className="account__content">
          <h1 className="account__title">店铺管理系统</h1>
          <Tabs className="account__tabs">
            <TabPane tab={<span>登录</span>} key="1">
              <AppLogin />
            </TabPane>
            <TabPane tab={<span>注册</span>} key="2">
              <AppSignup />
            </TabPane>
          </Tabs>
        </Content>
        <Footer className="account__footer">
          <a
            className="account__link"
            href="https://xrr2016.github/io"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Icon type="github" />
          </a>
          <a className="account__link" href="mailto:xiaoranran1993@outlook.com">
            <Icon type="mail" />
          </a>
        </Footer>
      </Layout>
    )
  }
}
