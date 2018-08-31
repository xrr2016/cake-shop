const { injectBabelPlugin } = require('react-app-rewired')
const rewireLess = require('react-app-rewire-less')

module.exports = function override(config, env) {
  config = injectBabelPlugin(
    ['import', { libraryName: 'antd', libraryDirectory: 'es', style: 'css' }],
    config
  )
  config = rewireLess.withLoaderOptions({
    modifyVars: {
      '@primary-color': '#8ACCEA'
    },
    javascriptEnabled: true
  })(config, env)
  return config
}
