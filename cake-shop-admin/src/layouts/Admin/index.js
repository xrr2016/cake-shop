import React, { Component } from 'react'
import { Layout, Menu, Icon, Avatar, Dropdown } from 'antd'

import './style.css'
import { ManagerContext } from '../../store/manager'
import AdminSider from '../../components/AdminSider'

const { Header, Content } = Layout

export default class Admin extends Component {
  state = {
    collapsed: false
  }

  toggle = () => this.setState({ collapsed: !this.state.collapsed })

  handleMenuItemClick = ({ item, key, keyPath }) => {
    console.log(item, key, keyPath)
  }

  render() {
    const { collapsed } = this.state
    const { children } = this.props

    const headerDropdownMenu = (
      <Menu>
        <Menu.Item key="self">
          <Icon type="user" />
          <span>个人中心</span>
        </Menu.Item>
        <Menu.Item key="logout">
          <Icon type="logout" />
          <span>退出登录</span>
        </Menu.Item>
      </Menu>
    )

    return (
      <ManagerContext.Consumer>
        {({ manager }) => (
          <Layout className="dashboard">
            <AdminSider collapsed={collapsed} />
            <Layout className="dashboard__main">
              <Header className="dashboard__header">
                <Icon
                  className="dashboard__trigger"
                  type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
                  onClick={this.toggle}
                />
                <div className="dashboard__actions">
                  <Dropdown overlay={headerDropdownMenu} placement="bottomLeft">
                    <span className="dashboard__action">
                      <Avatar
                        className="dashboard__avatar"
                        style={{ backgroundColor: '#87d068' }}
                        icon="user"
                      />
                      <span className="dashboard__username">{manager.name}</span>
                    </span>
                  </Dropdown>
                </div>
              </Header>
              <Content className="dashboard__content">{children}</Content>
            </Layout>
          </Layout>
        )}
      </ManagerContext.Consumer>
    )
  }
}
