import React, { Component } from 'react'
import { Layout, Menu, Icon, Avatar, Dropdown } from 'antd'

import './style.css'

const { Header, Sider, Content } = Layout
const { SubMenu } = Menu

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
      <Layout className="dashboard">
        <Sider
          className="dashboard__sider"
          width="256"
          trigger={null}
          theme="dark"
          collapsed={collapsed}
        >
          <h1 className="dashboard__logo">
            <Icon className="logo" type="appstore-o" />
            <span className="title">Cake Shop Admin</span>
          </h1>
          <Menu mode="inline" theme="dark" defaultSelectedKeys={['0']}>
            <Menu.Item key="dashboard" onClick={this.handleMenuItemClick}>
              <Icon type="dashboard" />
              <span>工作台</span>
            </Menu.Item>
            <SubMenu
              key="product"
              title={
                <span>
                  <Icon type="area-chart" />
                  <span>商品管理</span>
                </span>
              }
            >
              <Menu.Item key="check">查看商品</Menu.Item>
              <Menu.Item key="add">新增商品</Menu.Item>
              <Menu.Item key="edit">编辑商品</Menu.Item>
            </SubMenu>
            <SubMenu
              key="shop"
              title={
                <span>
                  <Icon type="shop" />
                  <span>店铺管理</span>
                </span>
              }
            >
              <Menu.Item key="check">查看管理员</Menu.Item>
              <Menu.Item key="add">新增管理员</Menu.Item>
            </SubMenu>
            <SubMenu
              key="user"
              title={
                <span>
                  <Icon type="user" />
                  <span>用户管理</span>
                </span>
              }
            >
              <Menu.Item key="check">用户数据</Menu.Item>
              <Menu.Item key="setting">用户编辑</Menu.Item>
            </SubMenu>
            <SubMenu
              key="order"
              title={
                <span>
                  <Icon type="profile" />
                  <span>订单管理</span>
                </span>
              }
            >
              <Menu.Item key="check">查看订单</Menu.Item>
              <Menu.Item key="edit">修改订单</Menu.Item>
              <Menu.Item key="detail">订单详情</Menu.Item>
            </SubMenu>
            <SubMenu
              key="comment"
              title={
                <span>
                  <Icon type="message" />
                  <span>评论管理</span>
                </span>
              }
            >
              <Menu.Item key="check">查看评论</Menu.Item>
              <Menu.Item key="edit">编辑评论</Menu.Item>
            </SubMenu>
            <SubMenu
              key="activity"
              title={
                <span>
                  <Icon type="gift" />
                  <span>活动管理</span>
                </span>
              }
            >
              <Menu.Item key="check">查看活动</Menu.Item>
              <Menu.Item key="add">添加活动</Menu.Item>
              <Menu.Item key="edit">活动编辑</Menu.Item>
            </SubMenu>
            <Menu.Item key="setting">
              <Icon type="setting" />
              <span>设置</span>
            </Menu.Item>
          </Menu>
        </Sider>
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
                  <span className="dashboard__username">xrr2016</span>
                </span>
              </Dropdown>
            </div>
          </Header>
          <Content className="dashboard__content">{children}</Content>
        </Layout>
      </Layout>
    )
  }
}
