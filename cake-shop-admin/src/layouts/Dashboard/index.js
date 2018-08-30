import React, { Component } from 'react'
import { Layout, Menu, Icon } from 'antd'
import './style.css'

const { Header, Sider, Content, Footer } = Layout

export default class Dashboard extends Component {
  state = {
    collapsed: false
  }

  toggle = () => this.setState({ collapsed: !this.state.collapsed })

  render() {
    const { collapsed } = this.state
    return (
      <Layout className="dashboard">
        <Sider className="dashboard__sider" trigger={null} collapsed collapsed={collapsed}>
          <div className="dashboard__logo" />
          <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']} defaultOpenKeys={['1']}>
            <Menu.Item key="1">
              <Icon type="user" />
              <span>nav 1</span>
            </Menu.Item>
            <Menu.Item key="2">
              <Icon type="video-camera" />
              <span>nav 2</span>
            </Menu.Item>
            <Menu.Item key="3">
              <Icon type="upload" />
              <span>nav 3</span>
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout>
          <Header className="dashboard__header" style={{ background: '#fff', padding: 0 }}>
            <Icon
              className="dashboard__trigger"
              type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
              onClick={this.toggle}
            />
          </Header>
          <Content
            className="dashboard__content"
            style={{ margin: '24px 16px', padding: 24, background: '#fff', minHeight: 280 }}
          >
            Content Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quaerat ullam, quis
            corrupti reiciendis ad ipsam omnis impedit natus qui fugiat rem eveniet id animi,
            laudantium culpa totam? Ex, illum aliquid? Lorem, ipsum dolor sit amet consectetur
            adipisicing elit. Magnam doloribus veritatis asperiores deleniti laudantium eum minus.
            Nulla impedit, amet laudantium corporis cum quibusdam, officia suscipit aliquid maxime
            doloremque voluptatem distinctio. Lorem ipsum dolor sit amet consectetur, adipisicing
            elit. Eaque iste facere repudiandae aspernatur, cum nulla asperiores vel hic nemo qui
            doloremque. Illo quam ipsum quos! Aliquam facere impedit voluptatibus sit. Lorem ipsum
            dolor sit amet consectetur, adipisicing elit. Culpa ipsa iste iure non nostrum sunt
            minus, consequatur fugit facilis quas delectus ea. Maxime odio praesentium reiciendis
            quia quibusdam nam commodi. Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Dolorum at suscipit repellat labore provident alias repudiandae, veniam similique
            aliquam velit illo minus delectus sapiente beatae atque perspiciatis molestias!
            Temporibus, nisi! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quaerat
            ullam, quis corrupti reiciendis ad ipsam omnis impedit natus qui fugiat rem eveniet id
            animi, laudantium culpa totam? Ex, illum aliquid? Lorem, ipsum dolor sit amet
            consectetur adipisicing elit. Magnam doloribus veritatis asperiores deleniti laudantium
            eum minus. Nulla impedit, amet laudantium corporis cum quibusdam, officia suscipit
            aliquid maxime doloremque voluptatem distinctio. Lorem ipsum dolor sit amet consectetur,
            adipisicing elit. Eaque iste facere repudiandae aspernatur, cum nulla asperiores vel hic
            nemo qui doloremque. Illo quam ipsum quos! Aliquam facere impedit voluptatibus sit.
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Culpa ipsa iste iure non
            nostrum sunt minus, consequatur fugit facilis quas delectus ea. Maxime odio praesentium
            reiciendis quia quibusdam nam commodi. Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Dolorum at suscipit repellat labore provident alias repudiandae,
            veniam similique aliquam velit illo minus delectus sapiente beatae atque perspiciatis
            molestias! Temporibus, nisi! Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Quaerat ullam, quis corrupti reiciendis ad ipsam omnis impedit natus qui fugiat rem
            eveniet id animi, laudantium culpa totam? Ex, illum aliquid? Lorem, ipsum dolor sit amet
            consectetur adipisicing elit. Magnam doloribus veritatis asperiores deleniti laudantium
            eum minus. Nulla impedit, amet laudantium corporis cum quibusdam, officia suscipit
            aliquid maxime doloremque voluptatem distinctio. Lorem ipsum dolor sit amet consectetur,
            adipisicing elit. Eaque iste facere repudiandae aspernatur, cum nulla asperiores vel hic
            nemo qui doloremque. Illo quam ipsum quos! Aliquam facere impedit voluptatibus sit.
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Culpa ipsa iste iure non
            nostrum sunt minus, consequatur fugit facilis quas delectus ea. Maxime odio praesentium
            reiciendis quia quibusdam nam commodi. Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Dolorum at suscipit repellat labore provident alias repudiandae,
            veniam similique aliquam velit illo minus delectus sapiente beatae atque perspiciatis
            molestias! Temporibus, nisi! Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Quaerat ullam, quis corrupti reiciendis ad ipsam omnis impedit natus qui fugiat rem
            eveniet id animi, laudantium culpa totam? Ex, illum aliquid? Lorem, ipsum dolor sit amet
            consectetur adipisicing elit. Magnam doloribus veritatis asperiores deleniti laudantium
            eum minus. Nulla impedit, amet laudantium corporis cum quibusdam, officia suscipit
            aliquid maxime doloremque voluptatem distinctio. Lorem ipsum dolor sit amet consectetur,
            adipisicing elit. Eaque iste facere repudiandae aspernatur, cum nulla asperiores vel hic
            nemo qui doloremque. Illo quam ipsum quos! Aliquam facere impedit voluptatibus sit.
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Culpa ipsa iste iure non
            nostrum sunt minus, consequatur fugit facilis quas delectus ea. Maxime odio praesentium
            reiciendis quia quibusdam nam commodi. Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Dolorum at suscipit repellat labore provident alias repudiandae,
            veniam similique aliquam velit illo minus delectus sapiente beatae atque perspiciatis
            molestias! Temporibus, nisi! Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Quaerat ullam, quis corrupti reiciendis ad ipsam omnis impedit natus qui fugiat rem
            eveniet id animi, laudantium culpa totam? Ex, illum aliquid? Lorem, ipsum dolor sit amet
            consectetur adipisicing elit. Magnam doloribus veritatis asperiores deleniti laudantium
            eum minus. Nulla impedit, amet laudantium corporis cum quibusdam, officia suscipit
            aliquid maxime doloremque voluptatem distinctio. Lorem ipsum dolor sit amet consectetur,
            adipisicing elit. Eaque iste facere repudiandae aspernatur, cum nulla asperiores vel hic
            nemo qui doloremque. Illo quam ipsum quos! Aliquam facere impedit voluptatibus sit.
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Culpa ipsa iste iure non
            nostrum sunt minus, consequatur fugit facilis quas delectus ea. Maxime odio praesentium
            reiciendis quia quibusdam nam commodi. Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Dolorum at suscipit repellat labore provident alias repudiandae,
            veniam similique aliquam velit illo minus delectus sapiente beatae atque perspiciatis
            molestias! Temporibus, nisi! Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Quaerat ullam, quis corrupti reiciendis ad ipsam omnis impedit natus qui fugiat rem
            eveniet id animi, laudantium culpa totam? Ex, illum aliquid? Lorem, ipsum dolor sit amet
            consectetur adipisicing elit. Magnam doloribus veritatis asperiores deleniti laudantium
            eum minus. Nulla impedit, amet laudantium corporis cum quibusdam, officia suscipit
            aliquid maxime doloremque voluptatem distinctio. Lorem ipsum dolor sit amet consectetur,
            adipisicing elit. Eaque iste facere repudiandae aspernatur, cum nulla asperiores vel hic
            nemo qui doloremque. Illo quam ipsum quos! Aliquam facere impedit voluptatibus sit.
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Culpa ipsa iste iure non
            nostrum sunt minus, consequatur fugit facilis quas delectus ea. Maxime odio praesentium
            reiciendis quia quibusdam nam commodi. Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Dolorum at suscipit repellat labore provident alias repudiandae,
            veniam similique aliquam velit illo minus delectus sapiente beatae atque perspiciatis
            molestias! Temporibus, nisi! Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Quaerat ullam, quis corrupti reiciendis ad ipsam omnis impedit natus qui fugiat rem
            eveniet id animi, laudantium culpa totam? Ex, illum aliquid? Lorem, ipsum dolor sit amet
            consectetur adipisicing elit. Magnam doloribus veritatis asperiores deleniti laudantium
            eum minus. Nulla impedit, amet laudantium corporis cum quibusdam, officia suscipit
            aliquid maxime doloremque voluptatem distinctio. Lorem ipsum dolor sit amet consectetur,
            adipisicing elit. Eaque iste facere repudiandae aspernatur, cum nulla asperiores vel hic
            nemo qui doloremque. Illo quam ipsum quos! Aliquam facere impedit voluptatibus sit.
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Culpa ipsa iste iure non
            nostrum sunt minus, consequatur fugit facilis quas delectus ea. Maxime odio praesentium
            reiciendis quia quibusdam nam commodi. Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Dolorum at suscipit repellat labore provident alias repudiandae,
            veniam similique aliquam velit illo minus delectus sapiente beatae atque perspiciatis
            molestias! Temporibus, nisi! Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Quaerat ullam, quis corrupti reiciendis ad ipsam omnis impedit natus qui fugiat rem
            eveniet id animi, laudantium culpa totam? Ex, illum aliquid? Lorem, ipsum dolor sit amet
            consectetur adipisicing elit. Magnam doloribus veritatis asperiores deleniti laudantium
            eum minus. Nulla impedit, amet laudantium corporis cum quibusdam, officia suscipit
            aliquid maxime doloremque voluptatem distinctio. Lorem ipsum dolor sit amet consectetur,
            adipisicing elit. Eaque iste facere repudiandae aspernatur, cum nulla asperiores vel hic
            nemo qui doloremque. Illo quam ipsum quos! Aliquam facere impedit voluptatibus sit.
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Culpa ipsa iste iure non
            nostrum sunt minus, consequatur fugit facilis quas delectus ea. Maxime odio praesentium
            reiciendis quia quibusdam nam commodi. Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Dolorum at suscipit repellat labore provident alias repudiandae,
            veniam similique aliquam velit illo minus delectus sapiente beatae atque perspiciatis
            molestias! Temporibus, nisi!
          </Content>
          <Footer style={{ textAlign: 'center' }}>xrr2016</Footer>
        </Layout>
      </Layout>
    )
  }
}
