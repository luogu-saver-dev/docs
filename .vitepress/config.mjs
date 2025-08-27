import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "帮助中心-洛谷保存站",
  head: [["link", { rel: "icon", href: "https://luogu.com.cn/favicon.ico" }]],
  description: "洛谷保存站帮助中心",
  base: "/docs/",
   ignoreDeadLinks: true,
  themeConfig: {
    outlineTitle: "目录",
    outline: [2,6],
    nav: [
      { text: '首页', link: '/' },
      { text: '保存站', link: 'https://dev.luogu.me' }
    ],
       // 设置搜索框的样式
    search: {
      provider: "local",
      options: {
        translations: {
          button: {
            buttonText: "搜索文档",
            buttonAriaLabel: "搜索文档",
          },
          modal: {
            noResultsText: "无法找到相关结果",
            resetButtonTitle: "清除查询条件",
            footer: {
              selectText: "选择",
              navigateText: "切换",
            },
          },
        },
      },
    },
    sidebar: [
      {
        text: '起步',
        items: [
          { text: '欢迎', link: '/docs/home' },
          { text: '从源代码构建', link: '/docs/start/build'},
          { text: '广告位申请', link: '/docs/start/ad'}
        ]
      },
      {
        text: '账号相关',
        items: [
          { text: 'token', link: '/docs/account/token' }
        ]
      },
      {
        text: '开发者',
        items: [
          {text: '针对洛谷保存站的贡献指南', link: '/docs/dev/saver'},
          {text: '针对本文档的贡献指南', link: '/docs/dev/docs'},
          {text: 'AIGC公约', link: '/docs/dev/aigc'}
        ]
      },
      {
        text: '协议与政策',
        items: [
          { text: '免责声明', link: '/docs/license/disclaimer' },
          { text: '数据移除政策', link: '/docs/license/deletion' },
          { text: '隐私协议', link: '/docs/license/privacy' }
        ]
      },
      {
        text: '其它',
        items: [
          { text: '更新日志', link: '/docs/update' }
        ]
      }
    ],  

    socialLinks: [
      { icon: 'github', link: 'https://github.com/luogu-saver-dev/luogu-saver' }
    ]
  }
})
