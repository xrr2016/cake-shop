import React, { Component } from 'react'
import { Checkbox } from 'antd-mobile'

import AppNavBar from '../../components/AppNavBar'
import AppCartItem from '../../components/AppCartItem'

import './style.css'

const { CheckboxItem } = Checkbox

export default class Cart extends Component {
  state = {
    totalMoney: 0,
    cartItems: [
      {
        img: 'http://localhost:9090/uploads/products/o_1b001ccd62babvb1msg2rs4tg90.jpg',
        title: '榴恋草莓',
        desc: '当独特的榴莲与酸甜的草莓倾心相遇，瞬间醉了你我的心扉',
        selected: true,
        number: 1,
        price: 168
      },
      {
        img: 'http://localhost:9090/uploads/products/o_1c32ei57jlcts8f1luk1c4roli18.jpg',
        title: '提拉米苏',
        desc: '提拉米苏提拉米苏提拉米苏提拉米苏',
        number: 1,
        selected: false,
        price: 170
      },
      {
        img: 'http://localhost:9090/uploads/products/o_1cl0qktjfs4162d16fh1ruas80k.jpg',
        title: '璞雪',
        desc: '我的专属蛋糕，只在幸福西饼；浪漫纯爱/专属心意',
        selected: true,
        number: 2,
        price: 198
      },
      {
        img: 'http://localhost:9090/uploads/products/o_1cm6t8q42rec1erk14v11opj6bqi.jpg',
        title: '桃李芬芳',
        desc: '莘莘学子鲜芒心意，谆谆教诲师恩难忘',
        selected: true,
        number: 1,
        price: 178
      }
    ]
  }

  componentDidMount() {
    this.calcTotalMoney()
  }

  calcTotalMoney = () => {
    let totalMoney = 0
    const { cartItems } = this.state
    const selectedItems = cartItems.filter(c => c.selected)
    selectedItems.forEach(c => (totalMoney += c.price * c.number))

    this.setState({ totalMoney })
  }

  toggleSelectAll = event => {
    const checked = event.target.checked
    const { cartItems } = this.state

    const newCartItems = cartItems.map(c => {
      c.selected = checked
      return c
    })

    this.setState({ cartItems: newCartItems })
    this.calcTotalMoney()
  }

  toggleItemSelected = item => {
    const { cartItems } = this.state
    const index = cartItems.findIndex(c => c === item)
    cartItems[index].selected = !cartItems[index].selected

    this.setState({ cartItems })
    this.calcTotalMoney()
  }

  onPlus = item => {
    const { cartItems } = this.state
    const index = cartItems.findIndex(c => c === item)
    cartItems[index].number += 1

    this.setState({ cartItems })
    this.calcTotalMoney()
  }

  onSubtract = item => {
    const { cartItems } = this.state
    const index = cartItems.findIndex(c => c === item)
    if (cartItems[index].number <= 1) {
      return
    }
    cartItems[index].number -= 1

    this.setState({ cartItems })
    this.calcTotalMoney()
  }

  render() {
    const { totalMoney, cartItems } = this.state

    return (
      <section className="app-cart">
        <AppNavBar rightIcon="ellipsis">购物车</AppNavBar>

        <ul className="app-cart__items">
          {cartItems.map((item, index) => (
            <AppCartItem
              item={item}
              key={index}
              onPlus={this.onPlus}
              onSubtract={this.onSubtract}
              toggleSelected={this.toggleItemSelected}
              i
            />
          ))}
        </ul>

        <div className="app-cart__checkout">
          <CheckboxItem className="check-all" key="all" onChange={this.toggleSelectAll}>
            <span style={{ fontSize: 14, color: '#999' }}>全选</span>
          </CheckboxItem>
          <div className="checkout-total">
            合计: <span className="total-money">￥{totalMoney.toFixed(2)}</span>
          </div>
          <div className="checkout-button">去结算</div>
        </div>
      </section>
    )
  }
}
