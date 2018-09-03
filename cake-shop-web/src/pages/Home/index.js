import React, { Component } from 'react'
import { SearchBar, Carousel, Grid, List } from 'antd-mobile'

import './style.css'
import ProductService from '../../services/product'

const { Item } = List
const { Brief } = Item

function mapCategory(category) {
  switch (category) {
    case 'recommend':
      return '推荐'
  }
}

export default class Home extends Component {
  state = { isLoading: true, topProducts: [], recommendProducts: [] }

  componentDidMount() {
    this.getTopProducts()
    this.getRecommendProducts()
  }

  getTopProducts = () => {
    ProductService.getTopProducts()
      .then(res => {
        const { topProducts } = res.data
        this.setState({ topProducts, isLoading: false })
      })
      .catch(error => {
        console.log(error)
      })
  }

  getRecommendProducts = () => {
    ProductService.getRecommendProducts()
      .then(res => {
        const { recommendProducts } = res.data
        this.setState({ recommendProducts })
      })
      .catch(error => {
        console.log(error)
      })
  }

  handleSearch = query => {
    console.log(query)
  }

  render() {
    const { topProducts, recommendProducts } = this.state

    const gridData = [
      {
        icon: 'https://gw.alipayobjects.com/zos/rmsportal/nywPmnTAvTmLusPxHPSu.png',
        text: `新品`
      },
      {
        icon: 'https://gw.alipayobjects.com/zos/rmsportal/nywPmnTAvTmLusPxHPSu.png',
        text: `推荐`
      },
      {
        icon: 'https://gw.alipayobjects.com/zos/rmsportal/nywPmnTAvTmLusPxHPSu.png',
        text: `热卖`
      },
      {
        icon: 'https://gw.alipayobjects.com/zos/rmsportal/nywPmnTAvTmLusPxHPSu.png',
        text: `促销`
      }
    ]

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
              <div className="top-products__item" key={item._id}>
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

        <Grid
          className="category-grid"
          data={gridData}
          hasLine={false}
          onClick={_el => console.log(_el)}
        />

        <List className="recommend-list">
          {recommendProducts.map(product => (
            <Item
              extra={mapCategory(product.category[0])}
              align="top"
              thumb={product.imgList[0]}
              multipleLine
            >
              {product.name} <Brief>{product.description}</Brief>
            </Item>
          ))}
        </List>
      </main>
    )
  }
}
