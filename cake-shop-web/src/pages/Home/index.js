import React, { Component } from 'react'
import { SearchBar, Carousel, Grid, ListView } from 'antd-mobile'

import './style.css'
import ProductService from '../../services/product'

const data01 = [
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
const NUM_ROWS = 20
let pageIndex = 0

function genData(pIndex = 0) {
  const dataBlob = {}
  for (let i = 0; i < NUM_ROWS; i++) {
    const ii = pIndex * NUM_ROWS + i
    dataBlob[`${ii}`] = `row - ${ii}`
  }
  return dataBlob
}

const dataSource = new ListView.DataSource({
  rowHasChanged: (row1, row2) => row1 !== row2
})

const separator = (sectionID, rowID) => (
  <div
    key={`${sectionID}-${rowID}`}
    style={{
      backgroundColor: '#F5F5F9',
      height: 8,
      borderTop: '1px solid #ECECED',
      borderBottom: '1px solid #ECECED'
    }}
  />
)

export default class Home extends Component {
  state = {
    data: ['1', '2', '3'],
    imgHeight: 176,
    slideIndex: 0,
    isLoading: true,
    dataSource,
    topProducts: []
  }

  componentDidMount() {
    ProductService.getTopProducts()
      .then(res => {
        const { topProducts } = res.data
        this.setState({ topProducts })
      })
      .catch(error => {
        console.log(error)
      })
    // setTimeout(() => this.lv.scrollTo(0, 120), 800);
    setTimeout(() => {
      this.rData = genData()
      this.setState({
        dataSource: this.state.dataSource.cloneWithRows(this.rData),
        isLoading: false
      })
    }, 600)
  }

  handleSearch = query => {
    console.log(query)
  }

  onEndReached = event => {
    if (this.state.isLoading && !this.state.hasMore) {
      return
    }
    console.log('reach end', event)
    this.setState({ isLoading: true })
    setTimeout(() => {
      this.rData = { ...this.rData, ...genData(++pageIndex) }
      this.setState({
        dataSource: this.state.dataSource.cloneWithRows(this.rData),
        isLoading: false
      })
    }, 1000)
  }

  render() {
    const { topProducts } = this.state
    let index = data01.length - 1

    const gridData = Array.from(new Array(4)).map((_val, i) => ({
      icon: 'https://gw.alipayobjects.com/zos/rmsportal/nywPmnTAvTmLusPxHPSu.png',
      text: `name${i}`
    }))

    const row = (rowData, sectionID, rowID) => {
      if (index < 0) {
        index = data01.length - 1
      }
      const obj = data01[index--]
      return <div>{'dsds'}</div>
    }

    return (
      <main className="app-home">
        <SearchBar placeholder="搜索" onSubmit={this.handleSearch} maxLength={16} />

        <Carousel
          className="top-products"
          dots={false}
          frameOverflow="visible"
          cellSpacing={20}
          slideWidth={0.8}
          autoplay
          infinite
        >
          {topProducts.length ? (
            topProducts.map((item, index) => (
              <div className="top-products__item">
                <img
                  className="top-products__img"
                  key={index}
                  src={item.imgList[0]}
                  alt={item.name}
                />
                <span className="top-products__name">{item.name}</span>
              </div>
            ))
          ) : (
            <div className="top-products__img-holder" />
          )}
        </Carousel>

        <Grid data={gridData} hasLine={false} onClick={_el => console.log(_el)} />

        <ul>
          <div style={{ padding: '0 15px', backgroundColor: '#fff' }}>
            <div
              style={{
                lineHeight: '50px',
                color: '#888',
                fontSize: 18,
                borderBottom: '1px solid #F6F6F6'
              }}
            >
              {'Meet hotel'}
            </div>
            <div style={{ display: 'flex', padding: '15px 0' }}>
              <img
                style={{ height: '64px', marginRight: '15px' }}
                src="https://zos.alipayobjects.com/rmsportal/dKbkpPXKfvZzWCM.png"
                alt=""
              />
              <div style={{ lineHeight: 1 }}>
                <div style={{ marginBottom: '8px', fontWeight: 'bold' }}>
                  {'不是所有的兼职汪都需要风吹日晒'}
                </div>
                <div>
                  <span style={{ fontSize: '30px', color: '#FF6E27' }}>{20}</span>¥
                </div>
              </div>
            </div>
          </div>
        </ul>
      </main>
    )
  }
}
