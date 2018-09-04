import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { Layout, Form, Select, Input, InputNumber, Button, message as Message } from 'antd'

import './style.css'
import ProductService from '../../../services/product'

const { Item } = Form
const { Content } = Layout
const { TextArea } = Input
const { Option } = Select

class ProductEdit extends Component {
  state = {
    product: {}
  }

  componentDidMount() {
    this.getProductDetail()
  }

  getProductDetail = () => {
    const { productId } = this.props.match.params

    ProductService.getProductDetail(productId)
      .then(res => {
        const { product } = res.data
        this.setState({ product })
      })
      .catch(error => {
        Message.error(error.message)
      })
  }

  handleSubmit = e => {
    e.preventDefault()
    const { _id } = this.state.product

    this.props.form.validateFields(async (err, values) => {
      if (!err) {
        console.log(values)
        ProductService.editProduct(_id, values)
          .then(res => {
            const { message } = res.data
            Message.success(message)
          })
          .catch(error => {
            const { data } = error.response
            Message.error(data.message)
          })
      }
    })
  }

  render() {
    const { product } = this.state
    const { getFieldDecorator } = this.props.form

    const itemLayout = {
      labelCol: { span: 6 },
      wrapperCol: { span: 18 }
    }

    return (
      <Content className="add-product">
        <h1 className="add-product__title">编辑商品</h1>
        <Form className="add-product__form" onSubmit={this.handleSubmit}>
          <Item label="商品名称" {...itemLayout}>
            {getFieldDecorator('name', {
              initialValue: product.name,
              rules: [{ required: true, message: '请输入商品名称' }]
            })(<Input />)}
          </Item>
          <Item label="商品描述" {...itemLayout}>
            {getFieldDecorator('description', {
              initialValue: product.description,
              rules: [{ required: true, message: '请输入商品描述' }]
            })(<TextArea rows={3} />)}
          </Item>
          <Item label="商品价格" {...itemLayout}>
            {getFieldDecorator('price', {
              initialValue: product.price,
              rules: [{ required: true, message: '请输入商品价格' }]
            })(<InputNumber min={0} step={1} />)}
          </Item>
          <Item label="商品库存" {...itemLayout}>
            {getFieldDecorator('stock', {
              initialValue: product.stock,
              rules: [{ required: true, message: '请输入商品库存' }]
            })(<InputNumber step={10} min={1} />)}
          </Item>
          <Item label="商品类目" {...itemLayout}>
            {getFieldDecorator('category', {
              rules: [{ message: '请选择商品类目', type: 'array' }]
            })(
              <Select placeholder="请选择商品类目" mode="multiple">
                <Option value="recommend">推荐</Option>
                <Option value="new">新品</Option>
                <Option value="sale">促销</Option>
                <Option value="hot">热卖</Option>
                <Option value="good">精选</Option>
              </Select>
            )}
          </Item>
          <Item label="商品评分" {...itemLayout}>
            {getFieldDecorator('rate', {
              initialValue: product.rate,
              rules: [{ required: true, message: '请输入商品评分' }]
            })(<InputNumber min={1} max={5} step={0.1} />)}
          </Item>
          <Item wrapperCol={{ span: 18, offset: 6 }}>
            <Button type="primary" htmlType="submit" block>
              修改
            </Button>
          </Item>
        </Form>
      </Content>
    )
  }
}

export default withRouter(Form.create()(ProductEdit))
