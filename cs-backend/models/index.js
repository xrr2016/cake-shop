import Sequelize from 'sequelize'

import { DB } from '../config'
// import Users from './user'
// import Products from './product'
// import Orders from './order'
import { tableName, tableDataTypes, tableOptions } from './comment'

const db = new Sequelize(DB.NAME, DB.USER, DB.PWD, {
  host: DB.HOST,
  dialect: 'mysql',
  operatorsAliases: false,
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
})

db
  .authenticate()
  .then(() => console.log('Connection has been established successfully.'))
  .catch(err => console.error('Unable to connect to the database:', err))

// db.define(...Users)
// db.define(...Products)
db.define(tableName, tableDataTypes, tableOptions)
// db.define(...Orders)

db.sync()

// export default { Comments }
