import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { Form, Icon, Input, Button, Checkbox, message as Message } from 'antd'

import { CAKE_SHOP_AUTH_TOKEN } from '../../constant'
import ManagerService from '../../services/manager'

const { Item } = Form

class AppLogin extends Component {
  handleSubmit = e => {
    e.preventDefault()
    this.props.form.validateFields(async (err, values) => {
      if (!err) {
        const { name, password } = values

        ManagerService.login(name, password)
          .then(res => {
            const { history } = this.props
            const { message, token } = res.data
            Message.success(message)
            localStorage.setItem(CAKE_SHOP_AUTH_TOKEN, token)
            history.push('/admin')
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

    return (
      <Form onSubmit={this.handleSubmit} className="login-form">
        <Item className="login-form__item">
          {getFieldDecorator('name', {
            rules: [{ required: true, message: '请输入你的用户名!' }]
          })(
            <Input
              prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
              placeholder="Username admin"
            />
          )}
        </Item>
        <Item>
          {getFieldDecorator('password', {
            rules: [{ required: true, message: '请输入你的密码!' }]
          })(
            <Input
              prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
              type="password"
              placeholder="Password admin"
            />
          )}
        </Item>
        <Button type="primary" htmlType="submit" block>
          登录
        </Button>
        <Item>
          {getFieldDecorator('remember', {
            valuePropName: 'checked',
            initialValue: true
          })(<Checkbox>记住我</Checkbox>)}
        </Item>
      </Form>
    )
  }
}

export default withRouter(Form.create()(AppLogin))
