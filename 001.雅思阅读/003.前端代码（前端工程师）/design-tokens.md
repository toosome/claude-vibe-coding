# Design Tokens · 雅思句子成分精读工具

> 来源：Stitch 生成的设计 tokens（`archive/design-tokens-original/DESIGN.md`）。
> 所有页面必须遵循本规范；新组件 / 新页面在此基础上扩展。

## 1. 颜色

### 1.1 Ambient Canvas（环境层）

| Token | 值 | 用途 |
| --- | --- | --- |
| `surface` | `#f8f9ff` | 整体背景 |
| `surface-canvas` | `#F1F5F9` | 主学习画布 |
| `surface-paper` | `#F8FAFC` | 卡片浅层 |
| `surface-card` | `#FFFFFF` | 卡片主体 |
| `surface-dim` | `#cbdbf3` | 已读/次要内容 |
| `text-primary` | `#0F172A` | 主文字 |
| `text-muted` | `#94A3B8` | 次要文字 |
| `border-subtle` | `#E2E8F0` | 浅边框 |

### 1.2 Primary / Secondary / Tertiary（功能色）

| Token | 值 | 用途 |
| --- | --- | --- |
| `primary` | `#003857` | 品牌主色（顶栏、CTA） |
| `primary-container` | `#1b4f72` | 主色容器（激活态） |
| `secondary` | `#156c3b` | 次要色（成功/同步提示） |
| `tertiary` | `#651a12` | 第三色（警示/错误） |
| `error` | `#ba1a1a` | 错误 |

### 1.3 语法成分配色（PRD §5.3，严格遵循）

| 成分 | bg | fg（深色文字）|
| --- | --- | --- |
| 主语 S | `#D6EAF8` | `#1B4F72` |
| 谓语 V | `#FADBD8` | `#78281F` |
| 宾语 O | `#D5F5E3` | `#196F3D` |
| 表语 P | `#FDEBD0` | `#7E5109` |
| 宾语补足语 OC | `#D1F2EB` | `#117864` |
| 定语 Attr | `#FCF3CF` | `#7D6608` |
| 状语 Adv | `#E8DAEF` | `#512E5F` |
| 同位语 App | `#FADBD8` | — |
| 插入语 Par | `#F2D7D5` | — |
| 连接词 Conj | `#E5E7E9` | `#475569` |
| 介词短语 Prep | 无底色 | 虚线边框 |

> 原则：浅色背景 + 深色文字，保证长文本可读性。

## 2. 字号

| Token | 字号 | 行高 | 字重 | 用途 |
| --- | --- | --- | --- | --- |
| `headline-lg` | `1.75rem` | `2.25rem` | 700 | 桌面端大标题 |
| `headline-lg-mobile` | `1.375rem` | `1.875rem` | 700 | 移动端大标题 |
| `headline-md` | `1.25rem` | `1.75rem` | 600 | 中标题 |
| `body-reading-lg` | `1.1875rem` | `2.125rem` | 400 | 精读正文（桌面） |
| `body-reading-md` | `1.0625rem` | `1.875rem` | 400 | 精读正文（移动） |
| `body-ui` | `0.9375rem` | `1.5rem` | 400 | UI 默认 |
| `body-secondary` | `0.875rem` | `1.375rem` | 400 | 次要正文 |
| `label-tag` | `0.6875rem` | `0.875rem` | 700 | 成分小标签 |
| `label-ui` | `0.8125rem` | `1.125rem` | 600 | UI 标签 |
| `caption` | `0.75rem` | `1rem` | 500 | 注释 |

字体族：`Inter`（全平台）；中文回落系统字体。

## 3. 圆角与间距

### 3.1 圆角

| Token | 值 | 用途 |
| --- | --- | --- |
| `rounded-sm` | `0.25rem` (4px) | 成分块、token |
| `rounded` | `0.5rem` (8px) | 输入框、按钮、chip |
| `rounded-lg` | `0.75rem` (12px) | 卡片 |
| `rounded-xl` | `1rem` (16px) | 模态框、容器 |
| `rounded-full` | `9999px` | 头像、圆角按钮 |

### 3.2 间距

| Token | 值 | 用途 |
| --- | --- | --- |
| `space-xs` | `0.25rem` | 极紧凑 |
| `space-sm` | `0.5rem` | 紧凑 |
| `space-md` | `1rem` | 默认 |
| `space-lg` | `1.5rem` | 卡片内边距 |
| `space-xl` | `2rem` | 章节间距 |
| `gutter` | `1rem` | 移动端外边距 |
| `gutter-desktop` | `1.5rem` | 桌面端外边距 |
| `margin` | `1rem` | 移动端页面边距 |
| `margin-desktop` | `2rem` | 桌面端页面边距 |

## 4. 阴影（Layered Paper Approach）

| 层级 | 用途 | Shadow |
| --- | --- | --- |
| Level 0 | 卡片底层 | 无（白纸） |
| Level 1 | 顶栏 / 底栏 | `0 1px 8px rgba(0,0,0,0.04)` + `backdrop-filter: blur(12px)` |
| Level 2 | Tooltip / Popover | `0 4px 16px -2px rgba(15,23,42,0.08)` |
| Level 3 | 模态框 / Drawer | `0 12px 32px -4px rgba(15,23,42,0.16)` |

## 5. 布局断点

| 设备 | 宽度 | 备注 |
| --- | --- | --- |
| 移动端 | `<768px` | 抽屉式图例、底栏控制条 |
| 平板 | `768–1023px` | 双列过渡 |
| 桌面端 | `≥1024px` | 阅读列 `max-width: 720px` + 右侧 280px 图例栏 |

## 6. 组件规则

- **成分块**：`inline-block`、`padding 0.125rem 0.375rem`、`box-decoration-break: clone`（跨行保持底色）
- **成分块底部色条**：2px solid（与 fg 同色）
- **介词短语**：1px dashed `#94A3B8` 边框，无底色
- **嵌套从句**：1px solid 边框框选整体
- **顶栏**：`z-index: 40`，半透明白 + 12px backdrop blur
- **底栏**：固定 bottom，移动端 z-index 高于顶栏

## 7. 修改记录

- `2026-10-11`：从 Stitch 原型 `DESIGN.md` 抽出，作为本项目唯一设计源
