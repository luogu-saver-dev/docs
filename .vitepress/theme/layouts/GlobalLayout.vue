<template>
  <!-- 继承 VitePress 内置的默认布局 -->
  <DefaultLayout>
    <!-- 评论区插槽：放在页面内容底部 -->
    <template #doc-bottom>
      <div class="giscus-container">
        <script
          src="https://giscus.app/client.js"
          data-repo="luogu-saver-dev/docs"
          data-repo-id="R_kgDOPk8gkA"
          data-category="Announcements"
          data-category-id="DIC_kwDOPk8gkM4CuqZ_"
          data-mapping="pathname"
          data-strict="0"
          data-reactions-enabled="1"
          data-emit-metadata="0"
          data-input-position="top"
          data-theme="preferred_color_scheme"
          data-lang="zh-CN"
          data-loading="lazy"
          crossorigin="anonymous"
          async
        ></script>
      </div>
    </template>
  </DefaultLayout>
</template>

<script setup>
// 从 VitePress 主题中导入内置的默认布局（关键修复）
import DefaultLayout from 'vitepress/theme/DefaultLayout.vue'
</script>

<style scoped>
.giscus-container {
  margin: 2rem auto 0;
  padding: 0 1.5rem;
  max-width: 1200px;
}
</style>
