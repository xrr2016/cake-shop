import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { Layout, Form, Icon, Input, Button, Checkbox, message as Message } from 'antd'

import '../account.css'
import ManagerService from '../../services/manager'

const { Item } = Form
const { Content, Footer } = Layout

class Signup extends Component {
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
            const { history } = this.props
            const { message } = res.data
            Message.success(message)
            history.push('/login')
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
      <Layout className="account">
        <Content className="account__content">
          <h1 className="account__title">店铺管理系统</h1>
          <sub className="account__sub-title">注册</sub>
          <Form onSubmit={this.handleSubmit} className="account__form">
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
            <Item>
              <Button type="primary" htmlType="submit" block>
                注册
              </Button>
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
    )
  }
}

export default withRouter(Form.create()(Signup))
