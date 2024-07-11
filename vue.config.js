const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave: false,
  devServer: {
    proxy: {
      '/path': {
        target: 'https://www.youjiayun.com',
        changeOrigin: true,
        pathRewrite:{
          '^/path':''
        }
      }
    }
  }
})
