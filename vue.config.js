// 导入Node.js的path模块
const path = require('path')

// 拼接路径
const resolve = dir => {
  return path.join(__dirname, dir)
}


module.exports = {
  lintOnSave: false,
  // 配置webpack
  chainWebpack: config => {
    config.resolve.alias
          .set('api', resolve('src/api'))
          .set('config', resolve('src/config'))
          .set('libs', resolve('src/libs'))
          .set('views', resolve('src/views'))
          .set('assets', resolve('src/assets'))
  },
  // 在打包时不生成Map文件
  productionSourceMap: false
}
