import express from 'express'
import Sequelize from 'sequelize'
import { DB_HOST, DB_NAME, DB_PWD, DB_USER } from './config'

const sequelize = new Sequelize(DB_NAME, DB_USER, DB_PWD, {
  host: DB_HOST,
  dialect: 'mysql',
  operatorsAliases: false,
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
})

const Users = sequelize.define(
  'cake_shop_users',
  {
    username: { type: Sequelize.STRING, allowNull: false },
    email: { type: Sequelize.STRING, unique: true, allowNull: false, validate: { isEmail: true } },
    password: { type: Sequelize.STRING, allowNull: false, validate: { notEmpty: true } },
    level: { type: Sequelize.INTEGER, allowNull: false },
    id: { type: Sequelize.UUID, allowNull: false, primaryKey: true, defaultValue: Sequelize.UUIDV4 }
  },
  { underscored: true, tableName: 'cake_shop_users' }
)
// hooks: {
//   beforeCreate: user => {
//     const salt = bcrypt.genSaltSync()
//     user.password = bcrypt.hashSync(user.password, salt)
//   }
// }

sequelize.sync()

Users.create({
  username: 'admin',
  email: 'admin@admin.com',
  password: 'admin',
  level: 5
}).then(user => console.log(user.toJSON()))

const app = express()

sequelize
  .authenticate()
  .then(() => console.log('Connection has been established successfully.'))
  .catch(err => console.error('Unable to connect to the database:', err))

app.use('/', async (req, res) => {
  res.send('hello world')
})

app.listen(3000, () => {
  console.log('Server listening on port 3000.')
})
