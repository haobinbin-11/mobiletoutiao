// PostCSS 的配置文件
module.exports = {
    plugins: {
      autoprefixer: {
        browsers: ['Android >= 4.0', 'iOS >= 8'],
      },
      'postcss-pxtorem': {
        // 转换的根元素基准值
        // 正常情况下按照你的设计稿来
        // 750 宽的设计稿 75
        // Vant 组件库是基于 逻辑像素 375 宽写的
        // 移动端页面一般都是以 iPhone6/7/8 为原型设计的
        // 设计稿都是基于物理像素 750 宽设计的
        rootValue: 37.5,
        propList: ['*'],
      },
    },
  };