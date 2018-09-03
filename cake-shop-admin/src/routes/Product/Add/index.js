import React, { Component } from 'react'
import {
  Layout,
  Form,
  Icon,
  Upload,
  Select,
  Switch,
  Input,
  InputNumber,
  Button,
  message as Message
} from 'antd'

import './style.css'
import ProductService from '../../../services/product'

const { Item } = Form
const { Content } = Layout
const { TextArea } = Input
const { Option } = Select
const imgUploadAction = 'http://localhost:9090/api/upload/product'

class ProductAdd extends Component {
  handleSubmit = e => {
    e.preventDefault()
    this.props.form.validateFields(async (err, values) => {
      if (!err) {
        console.log(values)
        values.imgList = values.imgList.map(item => item.response.imgUrl)
        ProductService.addProduct(values)
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

  normFile = e => {
    if (Array.isArray(e)) {
      return e
    }
    return e && e.fileList
  }

  render() {
    const { getFieldDecorator } = this.props.form

    const itemLayout = {
      labelCol: { span: 6 },
      wrapperCol: { span: 18 }
    }

    return (
      <Content className="add-product">
        <h1 className="add-product__title">添加商品</h1>
        <Form className="add-product__form" onSubmit={this.handleSubmit}>
          <Item label="商品名称" {...itemLayout}>
            {getFieldDecorator('name', {
              rules: [{ required: true, message: '请输入商品名称' }]
            })(<Input />)}
          </Item>
          <Item label="商品描述" {...itemLayout}>
            {getFieldDecorator('description', {
              rules: [{ required: true, message: '请输入商品描述' }]
            })(<TextArea rows={3} />)}
          </Item>
          <Item label="商品价格" {...itemLayout}>
            {getFieldDecorator('price', {
              rules: [{ required: true, message: '请输入商品价格' }],
              initialValue: 99.0
            })(<InputNumber min={0} step={1} />)}
          </Item>
          <Item label="商品库存" {...itemLayout}>
            {getFieldDecorator('stock', {
              rules: [{ required: true, message: '请输入商品库存' }],
              initialValue: 999
            })(<InputNumber step={10} min={1} />)}
          </Item>
          <Item label="商品类目" {...itemLayout}>
            {getFieldDecorator('category', {
              rules: [{ message: '请选择商品类目', type: 'array' }]
            })(
              <Select placeholder="请选择商品类目" mode="multiple">
                <Option value="new">新品</Option>
                <Option value="sale">促销</Option>
                <Option value="hot">热卖</Option>
                <Option value="good">精选</Option>
              </Select>
            )}
          </Item>
          <Item label="商品评分" {...itemLayout}>
            {getFieldDecorator('rate', {
              rules: [{ required: true, message: '请输入商品评分' }],
              initialValue: 5
            })(<InputNumber min={1} max={5} step={0.1} />)}
          </Item>
          <Item {...itemLayout} label="商品图片">
            {getFieldDecorator('imgList', {
              rules: [{ required: true, message: '请至少上传一张商品图片' }],
              valuePropName: 'fileList',
              getValueFromEvent: this.normFile
            })(
              <Upload name="productImg" action={imgUploadAction} listType="picture-card">
                <Button>
                  <Icon type="upload" />
                  上传
                </Button>
              </Upload>
            )}
          </Item>
          <Item label="是否发布" {...itemLayout}>
            {getFieldDecorator('publish', {
              initialValue: false
            })(<Switch />)}
          </Item>
          <Item wrapperCol={{ span: 18, offset: 6 }}>
            <Button type="primary" htmlType="submit" block>
              添加
            </Button>
          </Item>
        </Form>
      </Content>
    )
  }
}

export default Form.create()(ProductAdd)
