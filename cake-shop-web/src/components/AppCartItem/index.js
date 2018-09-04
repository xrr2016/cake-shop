import React, { Component } from 'react'
import { Checkbox } from 'antd-mobile'
import './style.css'

const { CheckboxItem } = Checkbox

export default class AppCartItem extends Component {
  toggleSelected = item => {
    this.props.toggleSelected(item)
  }

  onPlus = item => {
    this.props.onPlus(item)
  }

  onSubtract = item => {
    this.props.onSubtract(item)
  }

  render() {
    const { item } = this.props

    return (
      <li className="cart-item">
        <CheckboxItem
          className="check-box"
          checked={item.selected}
          onChange={() => this.toggleSelected(item)}
        />
        <div className="product">
          <img className="image" src={item.img} alt={item.title} />
          <div className="content">
            <p className="title">{item.title}</p>
            <p className="desc">{item.desc}</p>
            <p className="price">¥{item.price * item.number}</p>
          </div>
        </div>
        <div className="number-box">
          <span className="subtract" onClick={() => this.onSubtract(item)}>
            -
          </span>
          <span className="num">{item.number}</span>
          <span className="plus" onClick={() => this.onPlus(item)}>
            +
          </span>
        </div>
      </li>
    )
  }
}
