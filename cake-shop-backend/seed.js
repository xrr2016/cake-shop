const bcrypt = require('bcrypt')
const User = require('./models/user')

const user = {
  name: '用户名',
  bio: '用户简介用户简介用户简介用户简介用户简介用户简介用户简介用户简介用户简介用户简介',
  email: `email@email.com`,
  password: 'test'
}

async function addUsers(number) {
  for (let index = 0; index < number; index++) {
    user.password = await bcrypt.hash(user.password, 10)
    user.name = user.name + `0${index}`

    const newUser = new User(user)

    await newUser
      .save()
      .then(result => {
        console.log(`用户 ${index}, 添加成功`)
      })
      .catch(error => {
        console.log(`用户 ${index}, 添加失败`)
      })

    if (index >= number) {
      console.log(` ${number}用户添加完成`)
    }
  }
}

addUsers(100)
