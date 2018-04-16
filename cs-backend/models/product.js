import Sequelize from 'sequelize'

export default [
  'cake_shop_products',
  {
    name: {
      type: Sequelize.STRING,
      allowNull: false
    },
    price: {
      type: Sequelize.FLOAT,
      allowNull: false
    },
    stock: {
      type: Sequelize.NUMBER,
      allowNull: false
    },
    id: {
      type: Sequelize.UUID,
      allowNull: false,
      primaryKey: true,
      defaultValue: Sequelize.UUIDV4
    }
  },
  {
    underscored: true
  }
]
