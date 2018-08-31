import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { Form, Input, Button, Checkbox, message as Message } from 'antd'

import './style.css'
import ManagerService from '../../services/manager'

const { Item } = Form

class AppSignUp extends Component {
  handleSubmit = e => {
    e.preventDefault()
    this.props.form.validateFields(async (err, values) => {
      if (!err) {
        const { name, password, email, agreement } = values

        if (!agreement) {
          Message.warning('请先阅读协议')
          return
        }

        ManagerService.signup({ name, email, password })
          .then(res => {
            const { message } = res.data
            Message.success(message)
            this.props.onRegistered()
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
      labelCol: { span: 4 },
      wrapperCol: { span: 20 }
    }

    return (
      <Form onSubmit={this.handleSubmit}>
        <Item label="用户名" {...itemLayout}>
          {getFieldDecorator('name', {
            rules: [{ required: true, message: '请输入你的用户名' }]
          })(<Input />)}
        </Item>
        <Item label="邮箱" {...itemLayout}>
          {getFieldDecorator('email', {
            rules: [
              { type: 'email', message: '请输入正确的邮箱地址' },
              { required: true, message: '请输入你的邮箱' }
            ]
          })(<Input />)}
        </Item>
        <Item label="密码" {...itemLayout}>
          {getFieldDecorator('password', {
            rules: [{ required: true, message: '请输入你的密码' }]
          })(<Input type="password" />)}
        </Item>
        <Item>
          {getFieldDecorator('agreement', {
            valuePropName: 'checked'
          })(
            <Checkbox>
              我已阅读 <a href="">协议</a>
            </Checkbox>
          )}
        </Item>
        <Button type="primary" htmlType="submit" block>
          注册
        </Button>
      </Form>
    )
  }
}

export default withRouter(Form.create()(AppSignUp))
