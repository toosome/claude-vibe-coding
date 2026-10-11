# CLAUDE.md · 雅思阅读

This file provides guidance when Claude Code works inside this folder and its subfolders.

## 这是什么

本目录是**「雅思句子成分精读工具」**的完整产品项目——一个面向雅思考生的句子成分可视化精读 Web 应用。

- **产品形态**：Web 单页应用（单文件 HTML，移动端优先）
- **核心功能**：逐句点读 + 成分高亮 + 中文译文 + 语法点提示 + 难句收藏 + 文章库（按难度/题材筛选）+ 账号注册/登录（纯前端 mock，仅本机可见）

## 目录组织（按角色 / 工作流顺序）

```
001.雅思阅读/
├── CLAUDE.md                              ← 本文件（目录总览）
├── 001.产品PRD（产品经理）/
│   ├── 雅思句子成分精读工具-PRD.md            ← PRD v1.0
│   └── 雅思句子成分精读工具-PRD-v1.0.1.md      ← PRD v1.0.1（当前最新）
├── 002.产品原型（UI设计师）/
│   └── stitch_document_driven_web_app/       ← Stitch 生成的原型
│       ├── desktop_auth / desktop_legend / desktop_library /
│       │   desktop_practice / grammar_legend / reader_practice /
│       │   saved_sentences / user_auth        ← 每页 code.html + screen.png
│       └── academic_precision/               ← 设计主题（Academic Precision 配色）
├── 003.前端代码（前端工程师）/
│   ├── README.md                             ← 前端实现说明（页面/跳转/账号/验收）
│   ├── index.html                            ← 入口页（按登录态自动跳转）
│   ├── design-tokens.md                      ← 唯一设计源（颜色/字号/圆角/间距/断点）
│   ├── pages/{login,library,practice,legend,saved}.html
│   ├── assets/{common.css,common.js}         ← 共享样式 + Nav / 登录态守卫
│   ├── archive/                              ← 历史原型快照（desktop_*/mobile_*）
│   └── screenshots/                          ← Playwright 冒烟截图（不入版本控制）
└── TEMP.雅思句子成分精读工具/                 ← 早期试验品（不入版本控制）
```

## 三阶段分工

- **001 产品经理**：PRD 是唯一需求源，`-PRD-v1.0.1.md` 为当前最新版本。改需求先改 PRD（§9 版本规划）。
- **002 UI 设计师**：Stitch 生成的原型，每页产出 `code.html` + `screen.png` 预览。
- **003 前端工程师**：最终可运行实现，页面按「功能」组织（非按设备），`archive/` 只保留历史快照、不参与构建。

**同步规则**：PRD → 原型 → 前端实现 三层保持一致；PRD §9 版本规划变更时，应回写原型与实现，不要静默偏离。

## 通用约定

- **技术栈**：单文件 HTML、零依赖、零构建、内嵌 CSS/JS（与仓库根 `CLAUDE.md` 一致）
- **移动端优先**：断点 <768px 手机 / 768–1023px 平板 / ≥1024px 桌面
- **数据持久化**：`localStorage`，key 前缀 `ielts-reader-*`（`accounts` / `current-account` / `favs` / `progress`）
- **设计规范**：以 `003.前端代码（前端工程师）/design-tokens.md` 为唯一设计源
- **不商业化**：个人学习工具，不做营销 / SEO / 付费墙
- **版权**：不直接分发真题原文，采用「自撰 / 用户导入」路径

## 不入版本控制的产物

- 截图：`**/screen.png`、`**/screenshots/`
- 临时目录：`TEMP.*/`
- 压缩包：`*.zip`（如 Stitch 源码包 `stitch_document_driven_web_app.zip`）

## 与根 CLAUDE.md 的关系

- 根 [`CLAUDE.md`](../CLAUDE.md) 给出整个仓库的通用约定（架构、运行、风格）
- 本文件规定「雅思句子成分精读工具」这个产品的组织方式
- 更细的页面、跳转、账号体系说明见 [`003.前端代码（前端工程师）/README.md`](003.前端代码（前端工程师）/README.md)
- 加载优先级：根 → 本文件 → 子目录 README（Claude Code 自动就近合并）
