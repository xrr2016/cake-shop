import React, { Component } from 'react'
import { Layout, List, Avatar, message as Message, Popconfirm, Icon } from 'antd'

import './style.css'
import ManagerService from '../../../services/manager'

const { Content } = Layout

export default class CheckManager extends Component {
  state = {
    loading: true,
    managers: []
  }

  componentDidMount() {
    ManagerService.getManagers()
      .then(res => {
        const { managers } = res.data
        this.setState({ managers, loading: false })
      })
      .catch(error => {
        this.setState({ loading: false })
        Message.error(error.message)
      })
  }

  removeManager = id => {
    const { managers } = this.state
    ManagerService.removeManager(id)
      .then(res => {
        const index = managers.findIndex(manager => manager._id === id)
        managers.splice(index, 1)
        this.setState({ managers })
        Message.error(res.data.message)
      })
      .catch(error => {
        const { data } = error.response
        Message.error(data.message)
      })
  }

  render() {
    const { managers, loading } = this.state
    return (
      <Content className="route-content">
        <List
          className="list"
          loading={loading}
          pagination={{
            onChange: page => {
              console.log(page)
            },
            pageSize: 10
          }}
          dataSource={managers}
          renderItem={manager => (
            <List.Item
              key={manager._id}
              actions={[
                <a>编辑</a>,
                <Popconfirm
                  title="确定要删除？"
                  icon={<Icon type="question-circle-o" style={{ color: 'red' }} />}
                  onConfirm={() => this.removeManager(manager._id)}
                >
                  <span>删除</span>
                </Popconfirm>
              ]}
            >
              <List.Item.Meta
                avatar={<Avatar>{manager.name.charAt(0)}</Avatar>}
                title={
                  <span>
                    {manager.name} 级别: {manager.level}
                  </span>
                }
                description={<span>{manager.email}</span>}
              />
            </List.Item>
          )}
        />
      </Content>
    )
  }
}
