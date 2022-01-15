module.exports = {
  chainWebpack: config => {
      // GraphQL Loader
      config.module
        .rule('scss')
        .test(/\.scss$/)
        .use('vue-style-loader')
          .loader('vue-style-loader')
          .end()
        // Add another loader
        .use('css-loader')
          .loader('css-loader')
          .end()
        .use('sass-loader')
          .loader('sass-loader')
          .end()
  },

  transpileDependencies: [
    'vuetify'
  ]
}
