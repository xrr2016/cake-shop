import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { Layout, List, message as Message, Popconfirm, Icon } from 'antd'

import './style.css'
import ProductService from '../../../services/product'

const { Content } = Layout

class ProductManage extends Component {
  state = { loading: false, products: [] }

  componentDidMount() {
    this.getAllProducts(-1)
  }

  getAllProducts = sort => {
    this.setState({ loading: true })
    ProductService.getAllProducts(sort)
      .then(res => {
        const { products } = res.data
        this.setState({ products, loading: false })
      })
      .catch(error => {
        this.setState({ loading: false })
        Message.error(error.message)
      })
  }

  togglePublishProduct = (id, publish) => {
    ProductService.togglePublishProduct(id, publish)
      .then(res => {
        this.getAllProducts(-1)
        Message.success(res.data.message)
      })
      .catch(error => {
        const { data } = error.response
        Message.error(data.message)
      })
  }

  toggleProductTop = (id, top) => {
    ProductService.editProduct(id, { top })
      .then(res => {
        this.getAllProducts(-1)
        Message.success(res.data.message)
      })
      .catch(error => {
        const { message } = error.response.data
        Message.error(message)
      })
  }

  deleteProduct = id => {
    ProductService.removeProduct(id)
      .then(res => {
        this.getAllProducts(-1)
        Message.success(res.data.message)
      })
      .catch(error => {
        const { data } = error.response
        Message.error(data.message)
      })
  }

  editProduct = id => {
    const { history } = this.props
    history.push(`/product/edit/${id}`)
  }

  render() {
    const { products, loading } = this.state

    return (
      <Content className="route-content">
        <List
          className="list"
          loading={loading}
          itemLayout="vertical"
          pagination={{
            onChange: page => {
              console.log(page)
            },
            pageSize: 10
          }}
          dataSource={products}
          renderItem={product => (
            <List.Item
              key={product._id}
              actions={[
                product.top ? (
                  <a onClick={() => this.toggleProductTop(product._id, false)}>取消首页轮播</a>
                ) : (
                  <a onClick={() => this.toggleProductTop(product._id, true)}>设置为首页轮播商品</a>
                ),
                <a onClick={() => this.editProduct(product._id)}>编辑</a>,
                product.publish ? (
                  <Popconfirm
                    title="确定要下架？"
                    icon={<Icon type="question-circle-o" style={{ color: 'red' }} />}
                    onConfirm={() => this.togglePublishProduct(product._id, false)}
                  >
                    <a>下架</a>
                  </Popconfirm>
                ) : (
                  <Popconfirm
                    title="确定要发布？"
                    icon={<Icon type="question-circle-o" style={{ color: 'green' }} />}
                    onConfirm={() => this.togglePublishProduct(product._id, true)}
                  >
                    <a>发布</a>
                  </Popconfirm>
                ),
                <Popconfirm
                  title="确定要删除？"
                  icon={<Icon type="question-circle-o" style={{ color: 'red' }} />}
                  onConfirm={() => this.deleteProduct(product._id, true)}
                >
                  <a>删除</a>
                </Popconfirm>
              ]}
              extra={<img width={90} alt={product.name} src={product.imgList[0]} />}
            >
              <List.Item.Meta title={product.name} description={product.description} />
            </List.Item>
          )}
        />
      </Content>
    )
  }
}

export default withRouter(ProductManage)
