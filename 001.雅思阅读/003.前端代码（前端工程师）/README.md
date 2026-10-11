# 雅思句子成分精读 · 前端代码

> 面向雅思考生的「句子成分可视化精读」工具，对应 PRD：[`../001.产品PRD（产品经理）/雅思句子成分精读工具-PRD-v1.0.1.md`](../001.产品PRD（产品经理）/雅思句子成分精读工具-PRD-v1.0.1.md)

## 📁 项目结构

```
003.前端代码（前端工程师）/
├── README.md               ← 本文件
├── design-tokens.md        ← 设计 tokens（颜色/字号/间距），唯一设计源
├── index.html              ← 入口页（按登录态自动跳转）
├── pages/                  ← 业务页面（按"功能"组织，非按"设备"）
│   ├── login.html          ← 登录 + 注册（全屏，按 PRD v1.0.1 §4.2.7）
│   ├── library.html        ← 文章库（按难度 / 题材筛选）
│   ├── practice.html       ← 精读工作台（核心：逐句点读 + 成分高亮）
│   ├── legend.html         ← 成分图例（按 PRD §5 层级分组）
│   └── saved.html          ← 我的难句（收藏列表）
├── assets/                 ← 共享资源
│   ├── common.css          ← Top nav / 移动端 TabBar / 设计 tokens 辅助
│   └── common.js           ← Nav 注入、account state、auth 跳转守卫
└── archive/                ← 历史原型快照（保留，不参与构建）
    ├── design-tokens-original/    ← Stitch DESIGN.md（原始）
    ├── desktop_auth/               ← 桌面端登录（Stitch 生成）
    ├── desktop_legend/             ← 桌面端图例（Stitch 生成）
    ├── desktop_library/            ← 桌面端文章库（Stitch 生成）
    ├── desktop_practice/           ← 桌面端精读（Stitch 生成）
    ├── mobile_auth/                ← 移动端登录
    ├── mobile_legend/              ← 移动端图例
    ├── mobile_practice/            ← 移动端精读
    └── mobile_saved/               ← 移动端收藏
```

## 🗺 页面跳转关系

```
              ┌────────────────────────────────────────────────────┐
              │  index.html（入口）                                  │
              │  根据登录态自动跳转：                                 │
              │    已登录 → library.html                             │
              │    未登录 → login.html                               │
              └─────────────┬──────────────────────────────────────┘
                            │
              ┌─────────────▼──────────────┐
              │  login.html（全屏登录页）    │ ← 未登录保护页
              │  预置 Demo 账号              │    (common.js 自动守卫)
              │  注册成功 → 自动登录         │
              └─────────────┬──────────────┘
                            │
              ┌─────────────▼──────────────┐
              │  library.html（文章库）      │ ← 已登录才能进
              │  按难度 / 题材筛选           │
              │  点击文章卡片 → practice     │
              └─────────────┬──────────────┘
                            │
                            ▼
              ┌─────────────────────────────────────┐
              │  practice.html（精读工作台 · 核心） │
              │  逐句点读 + 成分高亮 + Tooltip       │
              │  句尾 ☆ → localStorage 收藏          │
              │  进度 → localStorage 持久化           │
              └──────┬──────────────┬───────────────┘
                     │              │
       ┌─────────────▼───┐    ┌─────▼───────────┐
       │  legend.html     │    │  saved.html      │
       │  成分图例 + 例句  │    │  我的难句列表    │
       │  点击切换显示     │    │  复习入口        │
       └──────────────────┘    └──────────────────┘
```

所有受保护页面（library / practice / legend / saved）在未登录态访问时，会被 [`assets/common.js`](assets/common.js) 自动重定向到 `login.html?from=<原页面>`。

## 🎨 设计规范

所有视觉规范统一在 [`design-tokens.md`](design-tokens.md)，新组件 / 新页面必须遵守：

- **颜色**：环境层 + 语法成分配色（与 PRD §5.3 一一对应）
- **字号**：8 档（headline / body / label / caption）
- **圆角**：4 档（sm / md / lg / full）
- **间距**：4 档基础 + 桌面/移动端变体
- **断点**：移动端 <768px，平板 768–1023px，桌面 ≥1024px

## 🔑 账号体系（PRD v1.0.1 §4.2.7）

| localStorage Key | 类型 | 用途 |
| --- | --- | --- |
| `ielts-reader-accounts` | Array | 所有账号（**明文密码，仅本地演示**） |
| `ielts-reader-current-account` | string \| null | 当前登录账号的 email |
| `ielts-reader-favs` | Array | 收藏的句子 text 列表 |
| `ielts-reader-progress` | object | 阅读进度（当前句 idx） |

**Demo 账号**：`demo@example.com` / `demo123`（首次访问时自动 seed）。

**跨页面共享**：
- `common.js` 在每个页面加载时读 `ielts-reader-current-account`，决定 top nav 显示「登录」按钮还是账号下拉
- 退出登录时清空 `current-account`，跳转回登录页（带 `?from=` 回跳参数）

## 🚀 本地运行

无构建步骤。直接用浏览器或本地静态服务器：

```bash
# 直接打开（手机也能用 file:// 协议）
start index.html

# 或局域网跑（手机真机调试）
python -m http.server 8000 --bind 0.0.0.0 --directory "d:/claude-vibe-coding/001.雅思阅读"
# 浏览器访问 http://<电脑IP>:8000/003.前端代码（前端工程师）/
```

## 📦 已实现 vs 未实现（对照 PRD）

### ✅ 已实现（MVP + V1.0 + V1.0.1）

- ✅ 逐句点读 + 成分高亮 + Tooltip（practice）
- ✅ 成分图例（legend）
- ✅ 中文译文 + 语法点提示（practice）
- ✅ 收藏难句（practice → saved）
- ✅ 文章库与按难度/题材筛选（library）
- ✅ 显示/隐藏标注（practice）
- ✅ 邮箱 + 密码注册/登录（全屏页，PRD §4.2.7）
- ✅ Demo 账号预置
- ✅ 跨页面 account state 共享
- ✅ 顶栏账号下拉 + 同步占位 + 退出登录
- ✅ 未登录访问守卫（自动跳转 login）

### ❌ 未实现（P2 / 后续版本）

- ❌ 用户导入文章 + AI 自动标注（PRD V1.5）
- ❌ 生词标注与词义（PRD V2.0）
- ❌ 语法点讲解卡片（PRD V2.0）
- ❌ 学习数据统计（PRD V3.0）
- ❌ 真实云同步（仅 UI 占位）
- ❌ 色盲友好配色模式
- ❌ 多账号数据隔离（当前 localStorage 全局共享）

## 🧪 自动化验证

每个页面 + 跳转链路都已通过 Playwright 冒烟测试。
截图保存在 `screenshots/`（详见 `archive/screenshots/`）。

## 📝 修改记录

- **2026-10-11**：项目重构
  - 把 `desktop_*` / `mobile_*` / `user_*` 等 9 个分散目录，整理成 `pages/`（按功能）+ `archive/`（保留原型）的清晰结构
  - 抽出 `design-tokens.md` 作为唯一设计源
  - 新增 `assets/common.css` + `assets/common.js`，统一 Top nav、移动端 TabBar、account state
  - 重写 login 页为「全屏」（PRD v1.0.1 §4.2.7.2）
  - 每个页面通过 `<a href>` 真实跳转（不再是 `<a href="#">` 占位）
