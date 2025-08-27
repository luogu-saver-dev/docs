# 为洛谷保存站做出贡献

::: tip 请注意

这是[洛谷保存站](https://dev.luogu.me)的贡献指南，而非：
- 本文档
- 旧前端
:::

如果你对参与 洛谷保存站 的开发感兴趣，请参考本章节开始上手。要注意的是，洛谷保存站在 [`GPL-3.0`](../license/GPL-3.0/) 下发行。

::: tip AIGC公约

我们并不反对使用 AIGC 进行开发。详情请阅读：[AIGC公约](aigc)。

~~比如说，下面的技术栈就是使用 AI 分析的。~~
:::

[Github 仓库](https://github.com/luogu-saver-dev/luogu-saver)
## 技术栈

### 核心技术栈
1. **后端框架**
   - **Node.js**：基于 `v22.18.0` 版本，作为运行时环境
   - **Express**：Web 服务器框架，处理路由和 HTTP 请求（见 `app.js` 中的路由配置）

2. **前端技术**
   - **模板引擎**：Nunjucks（用于渲染页面，如 `views` 目录下的 `.njk` 文件）
   - **UI 框架**：SemanticUI（静态资源中包含其 CSS 和 JS 文件，见 `static/semantic` 目录）
   - **Markdown 处理**：`markdown-it` 及扩展（`markdown-it-attrs`、`markdown-it-container`）用于渲染 Markdown 内容（见 `renderer.js`）

3. **数据库**
   - **MySQL**：通过 `mysql2` 库进行数据库操作（见 `package.json` 依赖及 `db.js` 相关逻辑）

4. **其他核心依赖**
   - **axios**：用于发送 HTTP 请求（如 `request.js` 中抓取内容）
   - **cheerio**：解析 HTML 内容（用于提取页面数据）
   - **node-schedule**：定时任务（如清理过期任务，见 `app.js`）
   - **cookie-parser**：处理 HTTP cookies
   - **dotenv**：管理环境变量
   - **chalk**：终端日志着色（见 `logger.js`）


### 功能模块划分
- **路由管理**：通过 Express 路由拆分功能（`routes/article.js`、`routes/paste.js` 等）
- **任务队列**：处理异步任务（`request.js` 中的队列管理和请求限制）
- **日志系统**：自定义日志工具（`logger.js`）
- **工具函数**：日期格式化、随机字符串生成等（`utils.js`）
- **权限中间件**：`auth.js` 处理用户认证


### 开发与部署
- **依赖管理**：使用 `npm`（`package.json`）
- **启动方式**：通过 `node app.js` 启动服务（见 README 中的使用说明）
- **环境配置**：通过 `.env` 文件管理环境变量（`.gitignore` 中包含）

## 开始开发
### Clone 仓库
```bash
git clone https://www.github.com/luogo-saver-dev/luogu-saver.git
cd luogu-saver
```
### 安装依赖
```bash
npm install
```
### 启动
```bash
node app.js
```

出现 `Server is running on port xxx` 说明成功。此时访问 `http://您的IP:端口` 检查是否能够访问，然后就可以进行开发了。（大喜
## 选择一个任务

在 `luogu-saver` 的 [`issues`](https://github.com/luogu-saver-dev/luogu-saver/issues) 中，过滤出 `label` 带有 `Backlog` 、没有被分配的 `issue`，这些 `issues` 是待认领的任务。选择一个任务后，在 `issue` 中评论，表示你将认领该任务（记得@Ark-Aak @quanac-lcx @CuteMurasame），等待分配。

等待的过程中可以提前开发。
