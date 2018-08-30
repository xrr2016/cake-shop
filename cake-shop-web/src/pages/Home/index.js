import React, { Component } from 'react'
import { SearchBar, Carousel, Grid, ListView } from 'antd-mobile'

import './style.css'

const data = Array.from(new Array(9)).map((_val, i) => ({
  icon: 'https://gw.alipayobjects.com/zos/rmsportal/nywPmnTAvTmLusPxHPSu.png',
  text: `name${i}`
}))

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
    dataSource
  }

  componentDidMount() {
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
    let index = data01.length - 1

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
          className="space-carousel"
          dots={false}
          frameOverflow="visible"
          cellSpacing={20}
          slideWidth={0.8}
          autoplay
          infinite
        >
          {this.state.data.map((val, index) => (
            <div className="img-holder" key={index} />
          ))}
        </Carousel>
        <Grid data={data} isCarousel hasLine={false} onClick={_el => console.log(_el)} />

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

        {/* <ListView
          ref={el => (this.lv = el)}
          dataSource={dataSource}
          renderHeader={() => <span>推荐</span>}
          renderFooter={() => (
            <div style={{ padding: 30, textAlign: 'center' }}>
              {this.state.isLoading ? 'Loading...' : 'Loaded'}
            </div>
          )}
          renderRow={row}
          renderSeparator={separator}
          className="am-list"
          pageSize={10}
          useBodyScroll
          onScroll={() => {
            console.log('scroll')
          }}
          scrollRenderAheadDistance={500}
          onEndReached={this.onEndReached}
          onEndReachedThreshold={10}
        /> */}
      </main>
    )
  }
}
