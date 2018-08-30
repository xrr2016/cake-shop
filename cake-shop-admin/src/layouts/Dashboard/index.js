import React, { Component } from 'react'
import { Layout, Menu, Icon, Avatar, Dropdown } from 'antd'
import './style.css'

const { Header, Sider, Content } = Layout
const { SubMenu } = Menu

export default class Dashboard extends Component {
  state = {
    collapsed: false
  }

  toggle = () => this.setState({ collapsed: !this.state.collapsed })

  render() {
    const { collapsed } = this.state
    const headerDropdownMenu = (
      <Menu>
        <Menu.Item key="0">
          <Icon type="user" />
          <span>个人中心</span>
        </Menu.Item>
        <Menu.Item key="1">
          <Icon type="setting" />
          <span>设置</span>
        </Menu.Item>
        <Menu.Divider />
        <Menu.Item key="3">
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
            <Icon className="logo" type="setting" />
            <span className="title">Cake Shop Admin</span>
          </h1>
          <Menu mode="inline" theme="dark" defaultSelectedKeys={['0']}>
            <SubMenu
              key="sun0"
              title={
                <span>
                  <Icon type="user" />
                  <span>Navigation One</span>
                </span>
              }
            >
              <Menu.Item key="1">option1</Menu.Item>
              <Menu.Item key="2">option2</Menu.Item>
              <Menu.Item key="3">option3</Menu.Item>
              <Menu.Item key="4">option4</Menu.Item>
            </SubMenu>
            <SubMenu
              key="sub1"
              title={
                <span>
                  <Icon type="mail" />
                  <span>Navigation One</span>
                </span>
              }
            >
              <Menu.Item key="5">Option 5</Menu.Item>
              <Menu.Item key="6">Option 6</Menu.Item>
              <Menu.Item key="7">Option 7</Menu.Item>
              <Menu.Item key="8">Option 8</Menu.Item>
            </SubMenu>
            <SubMenu
              key="sub2"
              title={
                <span>
                  <Icon type="mail" />
                  <span>Navigation One</span>
                </span>
              }
            >
              <Menu.Item key="5">Option 5</Menu.Item>
              <Menu.Item key="6">Option 6</Menu.Item>
              <Menu.Item key="7">Option 7</Menu.Item>
              <Menu.Item key="8">Option 8</Menu.Item>
            </SubMenu>
            <SubMenu
              key="sub3"
              title={
                <span>
                  <Icon type="mail" />
                  <span>Navigation One</span>
                </span>
              }
            >
              <Menu.Item key="5">Option 5</Menu.Item>
              <Menu.Item key="6">Option 6</Menu.Item>
              <Menu.Item key="7">Option 7</Menu.Item>
              <Menu.Item key="8">Option 8</Menu.Item>
            </SubMenu>
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
              <span className="dashboard__action">
                <Icon type="question-circle-o" />
              </span>
              <Dropdown overlay={headerDropdownMenu}>
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
          <Content className="dashboard__content">
            uscipit aliquid maxime doloremque voluptatem distinctio. Lorem ipsum dolor sit amet
            consectetur, adipisicing elit. Eaque iste facere repudiandae aspernatur, cum nulla
            asperiores vel hic nemo qui doloremque. Illo quam ipsum quos! Aliquam facere impedit
            voluptatibus sit. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Culpa ipsa
            iste iure non nostrum sunt minus, consequatur fugit facilis quas delectus ea. Maxime
            odio praesentium reiciendis quia quibusdam nam commodi. Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Dolorum at suscipit repellat labore provident alias
            repudiandae, veniam similique aliquam velit illo minus delectus sapiente beatae atque
            perspiciatis molestias! Temporibus, nisi!
          </Content>
        </Layout>
      </Layout>
    )
  }
}
