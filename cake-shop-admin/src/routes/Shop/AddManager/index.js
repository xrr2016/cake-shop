import React, { Component } from 'react'
import { Layout, Form, Input, Button, message as Message } from 'antd'

import './style.css'
import ManagerService from '../../../services/manager'

const { Item } = Form
const { Content } = Layout

class AddManager extends Component {
  handleSubmit = e => {
    e.preventDefault()
    this.props.form.validateFields(async (err, values) => {
      if (!err) {
        const { name, password, email, level } = values

        ManagerService.signup({ name, email, password, level })
          .then(res => {
            Message.success('添加成功')
          })
          .catch(error => {
            const { data } = error.response
            Message.error(data.message)
          })
      }
    })
  }

  render() {
    const { getFieldDecorator } = this.props.form

    const itemLayout = {
      labelCol: { span: 6 },
      wrapperCol: { span: 18 }
    }

    return (
      <Content className="route-content content">
        <Form onSubmit={this.handleSubmit} className="form">
          <Item label="用户名" {...itemLayout}>
            {getFieldDecorator('name', {
              rules: [{ required: true, message: '请输入管理员的用户名' }]
            })(<Input />)}
          </Item>
          <Item label="邮箱" {...itemLayout}>
            {getFieldDecorator('email', {
              rules: [
                { type: 'email', message: '请输入正确的邮箱地址' },
                { required: true, message: '请输入管理员的邮箱' }
              ]
            })(<Input />)}
          </Item>
          <Item label="密码" {...itemLayout}>
            {getFieldDecorator('password', {
              rules: [{ required: true, message: '请输入管理员的密码' }]
            })(<Input type="password" />)}
          </Item>
          <Item label="级别" {...itemLayout}>
            {getFieldDecorator('level', {
              rules: [{ required: true, message: '请输入管理员的级别' }],
              initialValue: 1
            })(<Input type="number" min={1} max={5} />)}
          </Item>
          <Item wrapperCol={{ span: 18, offset: 6 }}>
            <Button block type="primary" htmlType="submit">
              添加
            </Button>
          </Item>
        </Form>
      </Content>
    )
  }
}

export default Form.create()(AddManager)
