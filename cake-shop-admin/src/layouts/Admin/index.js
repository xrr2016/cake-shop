import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { Layout, Menu, Icon, Avatar, Dropdown } from 'antd'

import './style.css'
import { CAKE_SHOP_AUTH_TOKEN, CAKE_SHOP_USER_INFO } from '../../constant'
import { ManagerContext } from '../../store/manager'
import AdminSider from '../../components/AdminSider'

const { Header } = Layout

class Admin extends Component {
  state = {
    collapsed: false
  }

  toggle = () => this.setState({ collapsed: !this.state.collapsed })

  logout = () => {
    localStorage.removeItem(CAKE_SHOP_AUTH_TOKEN)
    localStorage.removeItem(CAKE_SHOP_USER_INFO)
    this.setState({ manager: {} })
    this.props.history.push('/login')
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
        <Menu.Item key="logout" onClick={this.logout}>
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
              {children}
            </Layout>
          </Layout>
        )}
      </ManagerContext.Consumer>
    )
  }
}

export default withRouter(Admin)
