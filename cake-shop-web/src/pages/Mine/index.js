import React, { Component } from 'react'
import { List } from 'antd-mobile'
import AppNavBar from '../../components/AppNavBar'

import './style.css'

const { Item } = List
const { Brief } = Item

export default class Mine extends Component {
  state = { isLoading: true }

  componentDidMount() {}

  onClick = () => {}

  render() {
    return (
      <main className="app-mine">
        <AppNavBar rightIcon="ellipsis" onClick={this.onClick}>
          我的
        </AppNavBar>

        <Item
          className="app-mine__header"
          arrow="horizontal"
          thumb="https://avatars2.githubusercontent.com/u/18013127?s=460&v=4"
          multipleLine
          onClick={() => {}}
        >
          轻剑快马 <Brief>没什么好说的</Brief>
        </Item>

        <List className="app-mine__list">
          <Item
            thumb="https://zos.alipayobjects.com/rmsportal/dNuvNrtqUztHCwM.png"
            onClick={() => {}}
          >
            我的订单
          </Item>
          <Item
            thumb="https://zos.alipayobjects.com/rmsportal/UmbJMbWOejVOpxe.png"
            onClick={() => {}}
          >
            我的收藏
          </Item>
          <Item
            thumb="https://zos.alipayobjects.com/rmsportal/dNuvNrtqUztHCwM.png"
            onClick={() => {}}
          >
            收货地址
          </Item>
          <Item
            thumb="https://zos.alipayobjects.com/rmsportal/UmbJMbWOejVOpxe.png"
            onClick={() => {}}
          >
            我的客服
          </Item>
        </List>

        <List className="app-mine__list">
          <Item
            thumb="https://zos.alipayobjects.com/rmsportal/dNuvNrtqUztHCwM.png"
            onClick={() => {}}
          >
            夜间模式
          </Item>
          <Item
            thumb="https://zos.alipayobjects.com/rmsportal/UmbJMbWOejVOpxe.png"
            onClick={() => {}}
          >
            意见反馈
          </Item>
          <Item
            thumb="https://zos.alipayobjects.com/rmsportal/UmbJMbWOejVOpxe.png"
            onClick={() => {}}
          >
            设置
          </Item>
        </List>
      </main>
    )
  }
}
