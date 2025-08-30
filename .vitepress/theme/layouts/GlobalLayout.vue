<template>
  <!-- 继承 VitePress 默认布局（保留导航、侧边栏等原有结构） -->
  <DefaultLayout>
    <!-- 评论区：放在页面内容底部，用容器控制样式 -->
    <div class="giscus-container">
      <!-- 你的 Giscus 脚本（直接复用你提供的配置） -->
      <script
        src="https://giscus.app/client.js"
        data-repo="luogu-saver-dev/docs" <!-- 你的 GitHub 仓库（格式：用户名/仓库名） -->
        data-repo-id="R_kgDOPk8gkA" <!-- 你的仓库 ID（无需修改，已正确配置） -->
        data-category="Announcements" <!-- 评论关联的 Discussions 分类 -->
        data-category-id="DIC_kwDOPk8gkM4CuqZ_" <!-- 分类 ID（无需修改） -->
        data-mapping="pathname" <!-- 评论与页面的映射方式（按 URL 路径，推荐） -->
        data-strict="0" <!-- 0=宽松匹配路径，1=严格匹配 -->
        data-reactions-enabled="1" <!-- 允许用户点赞评论（1=开启，0=关闭） -->
        data-emit-metadata="0" <!-- 不发送页面元数据（简化模式） -->
        data-input-position="top" <!-- 评论输入框在顶部 -->
        data-theme="preferred_color_scheme" <!-- 跟随系统主题（亮/暗模式自动切换） -->
        data-lang="zh-CN" <!-- 中文界面 -->
        data-loading="lazy" <!-- 懒加载（滚动到评论区才加载，优化性能） -->
        crossorigin="anonymous"
        async
      ></script>
    </div>
  </DefaultLayout>
</template>

<script setup>
// 导入 VitePress 默认布局（必须，否则会覆盖原有页面结构）
import DefaultLayout from 'vitepress/theme/layouts/DefaultLayout.vue'
</script>

<style scoped>
/* 可选：调整评论区样式（避免与页面内容太近，限制宽度） */
.giscus-container {
  margin-top: 2rem; /* 与上方内容的间距 */
  padding: 0 1.5rem; /* 左右内边距（适配移动端） */
  max-width: 1200px; /* 最大宽度（与文档内容对齐） */
  margin-left: auto;
  margin-right: auto;
}
</style>
