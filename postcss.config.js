module.exports = {
  plugins: {
    autoprefixer: {},
    "postcss-px-to-viewpoet": {
      viewportWidth: 375,
      viewportHeight: 667,
      unitPrecision: 5,//指定"px"转换成失传单位，建议使用vw
      viewportUnit: 'vw',//指定需要转换成的视窗单位，建议使用vw
      selectorBlackList:['ignore', 'tab-bar'],//指定不需要转换的类
      minPixelValue: 1,//小鱼或等于‘1px’不转换为视窗单位
      mediaQuery:false,//允许在媒体查询中转为为“px
      exclude:[/^tabBar/]
    }
  }
}
