import React, { Component } from 'react'
import { Layout, Tabs, List, Card, message as Message } from 'antd'

import Chart from 'bizcharts/lib/components/Chart'
import Axis from 'bizcharts/lib/components/Axis'
import Geom from 'bizcharts/lib/components/Geom'
import Tooltip from 'bizcharts/lib/components/Tooltip'

import './style.css'

const { Content } = Layout
const { TabPane } = Tabs

const totalData = [
  {
    title: '今日销售额',
    number: 1989.0
  },
  {
    title: '今日订单数',
    number: 134
  },
  {
    title: '今日新增用户',
    number: 45
  }
]

const data = [
  { day: 1, sales: 52 },
  { day: 2, sales: 61 },
  { day: 3, sales: 145 },
  { day: 4, sales: 48 },
  { day: 5, sales: 38 },
  { day: 6, sales: 38 },
  { day: 7, sales: 38 }
]

const scale = {
  sales: { tickInterval: 20, alias: '销售额' },
  day: {
    type: 'linear'
  }
}

export default class Dashboard extends Component {
  state = {
    key: 'view',
    noTitleKey: 'view'
  }

  onTabChange = (key, type) => {
    this.setState({ [type]: key })
  }

  render() {
    return (
      <Content className="dashboard-content">
        <List
          grid={{ gutter: 16, column: 3 }}
          dataSource={totalData}
          renderItem={item => (
            <List.Item>
              <Card bordered={false}>
                {item.title}: {item.number}
              </Card>
            </List.Item>
          )}
        />
        <Card bordered={false} style={{ marginBottom: 16 }}>
          <Tabs defaultActiveKey="views">
            <TabPane tab="访问量趋势" key="views">
              <Chart height={400} data={data} scale={scale} padding={[40, 30, 40, 30]}>
                <Axis name="day" />
                <Axis name="sales" />
                <Tooltip crosshairs={{ type: 'y' }} />
                <Geom type="interval" position="day*sales" />
              </Chart>
            </TabPane>
            <TabPane tab="销售额趋势" key="sales">
              Content of Tab Pane 2
            </TabPane>
          </Tabs>
        </Card>
      </Content>
    )
  }
}
