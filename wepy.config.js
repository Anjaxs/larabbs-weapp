const path = require('path')
const DefinePlugin = require('@wepy/plugin-define')
const PluginUglifyjs = require('@wepy/plugin-uglifyjs')

var prod = process.env.NODE_ENV === 'production'

const URL_PROD = '"https://weapp.liyu.wiki/api/v1/"'
const URL_DEV = '"http://larabbs.test/api/v1/"'

module.exports = {
  wpyExt: '.wpy',
  eslint: true,
  cliLogs: !prod,
  static: ['static'],
  build: {
  },
  resolve: {
    alias: {
      counter: path.join(__dirname, 'src/components/counter'),
      '@': path.join(__dirname, 'src')
    },
    aliasFields: ['wepy', 'weapp'],
    modules: ['node_modules']
  },
  compilers: {
    less: {
      compress: prod
    },
    babel: {
      sourceMap: true,
      presets: [
        '@babel/preset-env'
      ],
      plugins: [
        '@wepy/babel-plugin-import-regenerator'
      ]
    }
  },
  plugins: [
    DefinePlugin({
      API_URL: prod ? URL_PROD : URL_DEV
    }),
    PluginUglifyjs({
      // options
    })
  ],
  appConfig: {
    noPromiseAPI: ['createSelectorQuery']
  }
}
