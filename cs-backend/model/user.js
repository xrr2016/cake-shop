export default (sequelize, Sequelize) => {
  const Users = sequelize.define(
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
        validate: {
          isEmail: true
        }
      },
      password: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
          notEmpty: true
        }
      },
      level: {
        type: Sequelize.ENUM(0, 1, 2, 3),
        allowNull: false,
        defaultValue: 0
      },
      id: {
        type: Sequelize.UUIDV4,
        allowNull: false,
        primaryKey: true
      }
    },
    {
      underscored: true,
      tableName: 'cake_shop_users'
      // hooks: {
      //   beforeCreate: user => {
      //     const salt = bcrypt.genSaltSync()
      //     user.password = bcrypt.hashSync(user.password, salt)
      //   }
      // }
    }
  )
  return Users
}
