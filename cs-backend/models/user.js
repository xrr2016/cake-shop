import Sequelize from 'sequelize'
import bcrypt from 'bcrypt'

export default [
  'cake_shop_users',
  {
    username: {
      type: Sequelize.STRING,
      allowNull: false
    },
    email: {
      type: Sequelize.STRING,
      unique: true,
      allowNull: false,
      validate: { isEmail: true }
    },
    password: {
      type: Sequelize.STRING,
      allowNull: false,
      validate: { notEmpty: true }
    },
    level: {
      type: Sequelize.INTEGER,
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
    underscored: true,
    hooks: {
      beforeCreate: user => {
        const salt = bcrypt.genSaltSync()
        user.password = bcrypt.hashSync(user.password, salt)
      }
    }
  }
]
