# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## 项目概述

这是一个 HTML 小游戏合集，每个游戏都是**独立的单文件 HTML**（CSS 和 JavaScript 全部内嵌），无任何外部依赖、无构建步骤。用户以中文交流，界面文案也全部使用中文。

- `001/index.html` — 俄罗斯方块（Tetris）
- `001/snake.html` — 贪吃蛇（Snake）

## 如何运行

没有构建、测试或 lint 命令。验证方式就是直接用浏览器打开对应的 HTML 文件：

```bash
start 001/snake.html   # Windows；或在浏览器中直接打开
```

### 手机真机测试（本地局域网服务器）

用户常在手机上体验游戏，用 Python 起一个静态服务器即可（机器上已装 Python 3.14 和 Node 24）：

```bash
python -m http.server 8000 --bind 0.0.0.0 --directory "d:/claude-vibe-coding"
```

- 手机与电脑必须连**同一 Wi-Fi**，然后用电脑的局域网 IP 访问，例如 `http://192.168.86.2:8000/001/snake.html`。
- 局域网 IP 用 `ipconfig` 查看（IPv4 地址）。若手机打不开，通常是 Windows 防火墙拦了端口，需放行 TCP 8000。

新游戏默认放在 `001/` 文件夹内，命名用英文小写，例如 `xxx.html`。

## 架构与约定

### 文件夹分工

| 文件夹 | 用途 | 命名 |
| --- | --- | --- |
| `001/` 起 | **HTML 小游戏**（俄罗斯方块、贪吃蛇等）单文件 | 英文小写 `xxx.html` |
| `00X.产品PRD/` | **产品类项目**的 PRD + 实现（每产品一个子文件夹） | 中文产品名 |

新增游戏默认放在 `001/` 文件夹内，命名用英文小写，例如 `xxx.html`。

新增产品走 `00X.产品PRD/<产品名>/` 路径，先在该目录放 `<产品名>-PRD.md`，再建实现子文件夹。详见 [`001.产品PRD/CLAUDE.md`](001.产品PRD/CLAUDE.md)。

### 通用约定（游戏与产品共用）

新增游戏时沿用现有的统一模式（两个文件实现风格一致）：

- **单文件结构**：`<style>` + `<canvas>` + `<script>`，一个 IIFE 包住全部 JS（`"use strict"`）。
- **Canvas 渲染**：游戏主逻辑跑在一个 `<canvas>` 上，`requestAnimationFrame` 驱动渲染循环；用时间累加器 + 位置插值做平滑移动，而不是逐格跳动。
- **音效**：一律用 Web Audio API（`AudioContext` + `OscillatorNode`）程序化生成，不引入外部音频文件；在首次用户交互时 `resume()` 解锁音频，并提供「音效：开/关」按钮。
- **最高分持久化**：`localStorage`，key 命名 `xxx-highscore`（如 `snake-highscore`、`tetris-highscore`）。
- **多端操作**：同时支持键盘（方向键 + WASD + 空格）、触屏按钮（`pointerdown` 响应，避免 300ms 延迟）、以及 canvas 上的滑动手势。
- **自适应布局**：棋盘尺寸不能写死像素，用 `fitBoard()` 根据 `window.innerWidth` / `innerHeight` 动态计算每格像素（声明为 `let CELL` 或 `let BLOCK`），并在 `resize` 事件里重算；桌面端把侧栏 + 间距预留进去。配合 `@media (max-width: 780px)` 把侧边栏从横排切换为堆叠，`body { overflow-x: hidden }`、`.game { max-width: 100% }` 兜底防溢出。
- **界面结构**：左上棋盘（带 `overlay` 遮罩显示开始/暂停/结束状态）+ 右侧信息栏（分数、最高分、等级、操作按钮、按键说明）。

创建或修改游戏时保持这套风格，避免引入第三方库或 CDN 依赖。

产品类项目（非游戏）可不用 `<canvas>`，但同样保持单文件、零依赖、移动端优先、localStorage 持久化的风格。

## 回馈
每次任务执行完毕后，请回复我（输出）：主人，任务已完成！
