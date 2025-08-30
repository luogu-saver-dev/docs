// 导入必要的依赖
import { h } from 'vue'
import DefaultTheme from 'vitepress/theme'
import './style.css'
// 导入自定义的全局布局（路径需与实际文件位置一致）
import GlobalLayout from './GlobalLayout.vue'

/** @type {import('vitepress').Theme} */
export default {
  // 继承默认主题的所有功能
  extends: DefaultTheme,
  // 使用自定义布局替换默认布局
  Layout: GlobalLayout,
  // 扩展应用（如需注册全局组件可在此添加）
  enhanceApp({ app, router, siteData }) {
    // 示例：app.component('ComponentName', Component)
  }
}
