// PostCSS 的配置文件
// PostCSS 是一个允许使用JS插件转换样式的工具。这些插件可以检查(lint) 你的CSS
module.exports = {
    // 配置要使用的相关插件
    plugins: {
      // 自动添加浏览器厂商声明前缀, 用来兼容不同的浏览器
      // autoprefixer: {
      //   // browsers 用来配置要兼容到的系统(浏览器)环境
      //   browsers: ['Android >= 4.0', 'iOS >= 8'],
      // },
      // 把 px 转为 rem
      'postcss-pxtorem': {
        // 转换的根元素基准值
        // 正常情况下按照你的设计稿来
        // 750 宽的设计稿 75
        // Vant 组件库是基于 逻辑像素 375 宽写的
        // 移动端页面一般都是以 iPhone6/7/8 为原型设计的
        // 设计稿都是基于物理像素 750 宽设计的
        rootValue: 37.5,
        // 需要转换的 CSS 属性, * 就是所有属性都要转换
        propList: ['*'],
      },
    },
  };