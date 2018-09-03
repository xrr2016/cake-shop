import React, { Component } from 'react'
import { Layout, List, message as Message, Popconfirm, Icon } from 'antd'

import './style.css'
import ProductService from '../../../services/product'

const { Content } = Layout

export default class CheckManager extends Component {
  state = { loading: false, products: [] }

  componentDidMount() {
    this.getProducts(-1)
  }

  getProducts = sort => {
    this.setState({ loading: true })
    ProductService.getProducts(sort)
      .then(res => {
        const { products } = res.data
        this.setState({ products, loading: false })
      })
      .catch(error => {
        this.setState({ loading: false })
        Message.error(error.message)
      })
  }

  updateProduct = (id, publish) => {
    ProductService.updateProduct(id, publish)
      .then(res => {
        this.getProducts(-1)
        Message.success(res.data.message)
      })
      .catch(error => {
        const { data } = error.response
        Message.error(data.message)
      })
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
              actions={
                product.publish
                  ? [
                      <Popconfirm
                        title="确定要下架？"
                        icon={<Icon type="question-circle-o" style={{ color: 'red' }} />}
                        onConfirm={() => this.updateProduct(product._id, false)}
                      >
                        <a>下架</a>
                      </Popconfirm>
                    ]
                  : [
                      <Popconfirm
                        title="确定要发布？"
                        icon={<Icon type="question-circle-o" style={{ color: 'green' }} />}
                        onConfirm={() => this.updateProduct(product._id, true)}
                      >
                        <a>发布</a>
                      </Popconfirm>
                    ]
              }
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
