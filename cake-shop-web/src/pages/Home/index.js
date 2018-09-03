import React, { Component } from 'react'
import { NavBar, Icon, Carousel, Grid, List } from 'antd-mobile'

import './style.css'
import icon0 from '../../assets/icons/0.png'
import icon1 from '../../assets/icons/1.png'
import icon2 from '../../assets/icons/2.png'
import icon3 from '../../assets/icons/3.png'
import ProductService from '../../services/product'

const { Item } = List
const { Brief } = Item

const gridData = [
  { icon: icon0, text: '新品', route: '/new' },
  { icon: icon1, text: '推荐', route: '/recommend' },
  { icon: icon2, text: '热卖', route: '/hot' },
  { icon: icon3, text: '促销', route: '/sale' }
]

function mapCategory(category) {
  switch (category) {
    case 'recommend':
      return '推荐'
    case 'sale':
      return '促销'
    case 'new':
      return '新品'
    case 'hot':
      return '热卖'
    case 'good':
      return '精选'
    default:
      return ''
  }
}

export default class Home extends Component {
  state = { isLoading: true, topProducts: [], products: [] }

  componentDidMount() {
    this.getProducts(-1)
    this.getTopProducts()
  }

  getProducts = sort => {
    ProductService.getProducts(sort)
      .then(res => {
        const { products } = res.data
        this.setState({ products })
      })
      .catch(error => {
        console.log(error)
      })
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

  handleSearch = query => {
    console.log(query)
  }

  render() {
    const { topProducts, products } = this.state

    return (
      <main className="app-home">
        <NavBar
          className="app-home__navbar"
          mode="light"
          rightContent={[
            <Icon key="search" type="search" onClick={this.handleSearch} color="#333" />
          ]}
        >
          Cake Shop
        </NavBar>

        <Carousel
          className="top-products"
          dots={false}
          frameOverflow="visible"
          cellSpacing={10}
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
                  alt={item.name}
                  src={item.imgList[0]}
                />
                <span className="top-products__name">{item.name}</span>
              </div>
            ))
          ) : (
            <div className="top-products__img-holder" />
          )}
        </Carousel>

        <Grid className="app-home__category-grid" data={gridData} columnNum={4} hasLine={false} />

        <List className="recommend-list">
          {products.map(product => (
            <Item
              key={product._id}
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
