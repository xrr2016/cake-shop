import Sequelize from 'sequelize'

export const tableName = 'cake_shop_comments'
export const tableDataTypes = {
  id: {
    type: Sequelize.UUID,
    allowNull: false,
    primaryKey: true,
    defaultValue: Sequelize.UUIDV4
  },
  comment_content: {
    type: Sequelize.STRING,
    allowNull: false
  },
  comment_from: {
    type: Sequelize.STRING,
    allowNull: false
  },
  comment_to: {
    type: Sequelize.STRING,
    allowNull: false
  },
  rate: {
    type: Sequelize.FLOAT,
    allowNull: true
  }
}
export const tableOptions = {
  underscored: true
}
