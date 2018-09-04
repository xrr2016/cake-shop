import React, { Component } from 'react'
import { Checkbox, ListView } from 'antd-mobile'
import AppNavBar from '../../components/AppNavBar'

import './style.css'

const CheckboxItem = Checkbox.CheckboxItem

const data = [
  {
    img: 'https://zos.alipayobjects.com/rmsportal/dKbkpPXKfvZzWCM.png',
    title: 'Meet hotel',
    des: '不是所有的兼职汪都需要风吹日晒'
  },
  {
    img: 'https://zos.alipayobjects.com/rmsportal/XmwCzSeJiqpkuMB.png',
    title: "McDonald's invites you",
    des: '不是所有的兼职汪都需要风吹日晒'
  },
  {
    img: 'https://zos.alipayobjects.com/rmsportal/hfVtzEhPzTUewPm.png',
    title: 'Eat the week',
    des: '不是所有的兼职汪都需要风吹日晒'
  }
]

export default class Cart extends Component {
  state = { isLoading: true }

  componentDidMount() {}

  onClick = () => {}

  selectItem = () => {}

  selectAll() {}

  render() {
    return (
      <section className="app-cart">
        <AppNavBar rightIcon="ellipsis" onClick={this.onClick}>
          购物车
        </AppNavBar>

        <ul className="app-cart__items">
          {data.map((obj, index) => (
            <li className="cart-item" style={{ padding: '0 15px' }} key={index}>
              <CheckboxItem className="check-all" key={index} onChange={() => this.selectItem()} />
              <div style={{ display: 'flex', padding: '15px 0' }}>
                <img style={{ height: '64px', marginRight: '15px' }} src={obj.img} alt="" />
                <div style={{ lineHeight: 1 }}>
                  <div style={{ marginBottom: '8px', fontWeight: 'bold' }}>{obj.des}</div>
                  <div>
                    <span style={{ fontSize: '30px', color: '#FF6E27' }}>¥35</span>
                  </div>
                </div>
              </div>
              <div className="number">
                <span>-</span>
                <span>1</span>
                <span>+</span>
              </div>
            </li>
          ))}
        </ul>

        <div className="app-cart__checkout">
          <CheckboxItem className="check-all" key="all" onChange={() => this.selectAll()}>
            <span style={{ fontSize: 14, color: '#999' }}>全选</span>
          </CheckboxItem>
          <div className="checkout-total">合计: 888.99</div>
          <div className="checkout-button">去结算</div>
        </div>
      </section>
    )
  }
}
