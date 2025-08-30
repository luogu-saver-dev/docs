// https://vitepress.dev/guide/custom-theme
import { h } from 'vue'
import DefaultTheme from 'vitepress/theme'
import './style.css'
// 导入自定义的全局布局组件（关键缺失步骤）
import GlobalLayout from './layouts/GlobalLayout.vue'

/** @type {import('vitepress').Theme} */
export default {
  extends: DefaultTheme,
  // 使用导入的GlobalLayout作为布局组件
  Layout: GlobalLayout,
  // 如果你需要通过插槽
  // Layout: () => {
  //   return h(DefaultTheme.Layout, null, {
  //     // 这里可以添加插槽内容，如之前的评论区配置
  //   })
  // },
  enhanceApp({ app, router, siteData }) {
    // 可以在这里注册全局组件或添加其他配置
  }
}
