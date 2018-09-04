import React, { Component } from 'react'
import { NavBar, Icon } from 'antd-mobile'

export default props => (
  <NavBar
    icon={<Icon type={props.icon} />}
    rightContent={[
      <Icon key="nav-bar-icon" type={props.rightIcon} onClick={props.onClick} color="#fff" />
    ]}
  >
    {props.children}
  </NavBar>
)
