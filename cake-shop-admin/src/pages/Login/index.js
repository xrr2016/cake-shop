import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { Layout, Form, Icon, Input, Button, Checkbox, message as Message } from 'antd'

import '../account.css'
import { ManagerContext } from '../../store/manager'
import ManagerService from '../../services/manager'
import { CAKE_SHOP_AUTH_TOKEN, CAKE_SHOP_USER_INFO } from '../../constant'

const { Item } = Form
const { Content, Footer } = Layout

class Login extends Component {
  handleSubmit = e => {
    e.preventDefault()
    this.props.form.validateFields(async (err, values) => {
      if (!err) {
        const { name, password } = values

        ManagerService.login(name, password)
          .then(res => {
            const { history, login } = this.props
            const { message, token, manager } = res.data

            Message.success(message)
            localStorage.setItem(CAKE_SHOP_AUTH_TOKEN, `Bearer ${token}`)
            localStorage.setItem(CAKE_SHOP_USER_INFO, JSON.stringify(manager))
            login(manager)
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
      <ManagerContext.Consumer>
        {login => (
          <Layout className="account" login={login}>
            <Content className="account__content">
              <h1 className="account__title">店铺管理系统</h1>
              <sub className="account__sub-title">登录</sub>
              <Form className="account__form" onSubmit={this.handleSubmit}>
                <Item>
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
                <Item>
                  <Button type="primary" htmlType="submit" block>
                    登录
                  </Button>
                </Item>
                <Item>
                  {getFieldDecorator('remember', {
                    valuePropName: 'checked',
                    initialValue: true
                  })(<Checkbox>记住我</Checkbox>)}
                </Item>
              </Form>
            </Content>
            <Footer className="account__footer">
              <a
                className="account__link"
                href="https://xrr2016.github/io"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Icon type="github" />
              </a>
              <a className="account__link" href="mailto:xiaoranran1993@outlook.com">
                <Icon type="mail" />
              </a>
            </Footer>
          </Layout>
        )}
      </ManagerContext.Consumer>
    )
  }
}

export default withRouter(Form.create()(Login))
