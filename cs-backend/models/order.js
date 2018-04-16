import Sequelize from 'sequelize'

export default [
  'cake_shop_orders',
  {
    id: {
      type: Sequelize.UUID,
      allowNull: false,
      primaryKey: true,
      defaultValue: Sequelize.UUIDV4
    },
    order_user: {
      type: Sequelize.STRING,
      allowNull: false
    },
    order_finish: {
      type: Sequelize.BOOLEAN,
      allowNull: false,
      defaultValue: false
    }
  },
  {
    underscored: true
  }
]
