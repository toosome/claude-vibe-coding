---
name: Academic Precision
colors:
  surface: '#f8f9ff'
  surface-dim: '#cbdbf3'
  surface-bright: '#f8f9ff'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#eef4ff'
  surface-container: '#e4efff'
  surface-container-high: '#dae9ff'
  surface-container-highest: '#d3e4fb'
  on-surface: '#0c1d2e'
  on-surface-variant: '#41474e'
  inverse-surface: '#223243'
  inverse-on-surface: '#e9f1ff'
  outline: '#72787f'
  outline-variant: '#c1c7cf'
  surface-tint: '#326286'
  primary: '#003857'
  on-primary: '#ffffff'
  primary-container: '#1b4f72'
  on-primary-container: '#92c0e9'
  inverse-primary: '#9dcbf4'
  secondary: '#156c3b'
  on-secondary: '#ffffff'
  secondary-container: '#9ff2b3'
  on-secondary-container: '#1b713e'
  tertiary: '#651a12'
  on-tertiary: '#ffffff'
  tertiary-container: '#833026'
  on-tertiary-container: '#ffa497'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#cce5ff'
  primary-fixed-dim: '#9dcbf4'
  on-primary-fixed: '#001e31'
  on-primary-fixed-variant: '#154b6d'
  secondary-fixed: '#a2f5b6'
  secondary-fixed-dim: '#86d89b'
  on-secondary-fixed: '#00210d'
  on-secondary-fixed-variant: '#005229'
  tertiary-fixed: '#ffdad5'
  tertiary-fixed-dim: '#ffb4a9'
  on-tertiary-fixed: '#410101'
  on-tertiary-fixed-variant: '#7d2c22'
  background: '#f8f9ff'
  on-background: '#0c1d2e'
  surface-variant: '#d3e4fb'
  surface-paper: '#F8FAFC'
  surface-canvas: '#F1F5F9'
  surface-card: '#FFFFFF'
  text-primary: '#0F172A'
  text-muted: '#94A3B8'
  border-subtle: '#E2E8F0'
  syntax-subject-bg: '#D6EAF8'
  syntax-subject-fg: '#1B4F72'
  syntax-predicate-bg: '#FADBD8'
  syntax-predicate-fg: '#78281F'
  syntax-object-bg: '#D5F5E3'
  syntax-object-fg: '#196F3D'
  syntax-predicative-bg: '#FDEBD0'
  syntax-predicative-fg: '#7E5109'
  syntax-complement-bg: '#D1F2EB'
  syntax-complement-fg: '#117864'
  syntax-attribute-bg: '#FCF3CF'
  syntax-attribute-fg: '#7D6608'
  syntax-adverbial-bg: '#E8DAEF'
  syntax-adverbial-fg: '#512E5F'
  syntax-appositive-bg: '#FADBD8'
  syntax-parenthetical-bg: '#F2D7D5'
  syntax-connective-bg: '#E5E7E9'
  syntax-connective-fg: '#475569'
typography:
  headline-lg:
    fontFamily: Inter
    fontSize: 1.75rem
    fontWeight: '700'
    lineHeight: 2.25rem
  headline-lg-mobile:
    fontFamily: Inter
    fontSize: 1.375rem
    fontWeight: '700'
    lineHeight: 1.875rem
  headline-md:
    fontFamily: Inter
    fontSize: 1.25rem
    fontWeight: '600'
    lineHeight: 1.75rem
  body-reading-lg:
    fontFamily: Inter
    fontSize: 1.1875rem
    fontWeight: '400'
    lineHeight: 2.125rem
  body-reading-md:
    fontFamily: Inter
    fontSize: 1.0625rem
    fontWeight: '400'
    lineHeight: 1.875rem
  body-ui:
    fontFamily: Inter
    fontSize: 0.9375rem
    fontWeight: '400'
    lineHeight: 1.5rem
  body-secondary:
    fontFamily: Inter
    fontSize: 0.875rem
    fontWeight: '400'
    lineHeight: 1.375rem
  label-tag:
    fontFamily: Inter
    fontSize: 0.6875rem
    fontWeight: '700'
    lineHeight: 0.875rem
    letterSpacing: 0.025em
  label-ui:
    fontFamily: Inter
    fontSize: 0.8125rem
    fontWeight: '600'
    lineHeight: 1.125rem
  caption:
    fontFamily: Inter
    fontSize: 0.75rem
    fontWeight: '500'
    lineHeight: 1rem
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  gutter: 1rem
  gutter-desktop: 1.5rem
  margin: 1rem
  margin-desktop: 2rem
  space-xs: 0.25rem
  space-sm: 0.5rem
  space-md: 1rem
  space-lg: 1.5rem
  space-xl: 2rem
---

## Brand & Style

This design system is engineered specifically for rigorous academic reading and cognitive grammar parsing. The design tone is scholarly, restrained, and intensely functional. It prioritizes typographic cadence, visual hierarchy, and structural clarity over ornamental distraction. 

The aesthetic synthesizes modern academic digital tooling with ergonomic paper-like comfort:
- **Calm, High-End Utility:** Interfaces avoid noisy branding to maintain full mental bandwidth on sentence architecture and syntactic relationships.
- **Distraction-Free Focus:** Dimmed unread contexts and soft, tactile focal states guide the eye along single sentences sequentially.
- **Academic Rigor:** Every visual element—from color coding to boundary rules—directly communicates structural linguistic logic.

## Colors

The color palette operates on a strict functional division between the ambient UI container and the analytical linguistic canvas:

- **Ambient Canvas:** Grounded in soft paper hues (`#F8FAFC` and `#F1F5F9`) paired with deep slate text (`#0F172A`) to minimize eye fatigue during extended study sessions.
- **Grammar Semantics:** Syntactic components follow a rigorous dual-token standard: a soft pastel background tint paired with a high-contrast ink foreground color (`浅色背景 + 深色文字`). 
  - **Subject (S):** Blue balance (`#D6EAF8` / `#1B4F72`).
  - **Predicate (V):** Kinetic coral (`#FADBD8` / `#78281F`).
  - **Object (O):** Grounded mint (`#D5F5E3` / `#196F3D`).
  - **Predicative (P):** Warm amber (`#FDEBD0` / `#7E5109`).
  - **Object Complement (OC):** Seafoam teal (`#D1F2EB` / `#117864`).
  - **Attributive (Attr):** Subtle parchment yellow (`#FCF3CF` / `#7D6608`).
  - **Adverbial (Adv):** Quiet violet (`#E8DAEF` / `#512E5F`).
  - **Connectives (Conj):** Neutral stone (`#E5E7E9` / `#475569`).
- **Context States:** Non-active text transitions to `text-muted` (`#94A3B8`) to keep visual emphasis focused exclusively on the active sentence target.

## Typography

The typographic engine is built around utilitarian clarity and line stability. `Inter` provides high legibility across dynamic grammatical annotations and dense sentence structures.

- **Reading Rhythm:** `body-reading-lg` and `body-reading-md` feature an expanded line height (`2.125rem` / `1.875rem`) to comfortably accommodate micro-labels, continuous baseline markers, and nested clausal borders without colliding with adjacent lines.
- **Constituent Micro-labels (`label-tag`):** Rendered at `0.6875rem` (`11px`) with bold weight (`700`). These tags sit tightly above or below constituent spans without causing baseline shifts.
- **Inline Text Span Integrity:** Highlighted phrases that wrap across multiple lines maintain a consistent background tint and text color across line-breaks using inline box decorations (`box-decoration-break: clone`).

## Layout & Spacing

The layout is built mobile-first, centering the study surface to maintain reading velocity across viewports.

- **Mobile Viewport (<768px):** The reader column is full-width with a fluid gutter of `1rem`. Secondary analytical features (such as the Syntax Legend) collapse into a bottom-docked sheet (Drawer). Controls remain anchored in an ergonomic bottom toolbar.
- **Desktop Viewport (>=1024px):** The text reading container is constrained to a centered reading column (`max-width: 720px`). The component legend unpins from the bottom and anchors into a persistent, fixed side panel to the right of the text.
- **Component Flow:** Spacing steps are strict multiples of `0.25rem` (4px base), standardizing interior card padding to `space-md` (`1rem`) and dialog margins to `space-lg` (`1.5rem`).

## Elevation & Depth

Visual hierarchy uses a layered paper approach combined with selective frosted glass (glassmorphism) for transient chrome:

- **Base Layer (Level 0):** Background canvas (`#F1F5F9`) with primary study surfaces rendered on `#FFFFFF` paper cards.
- **Docked Chrome & Toolbars (Level 1):** Header navigation and bottom control docks use a translucent white surface (`rgba(255, 255, 255, 0.88)`) combined with a `12px` backdrop blur (`backdrop-filter: blur(12px)`) and a delicate lower/upper border (`1px solid #E2E8F0`).
- **Floating Overlays & Tooltips (Level 2):** Inline grammar tooltips and popovers cast an ambient shadow: `0 4px 16px -2px rgba(15, 23, 42, 0.08)`.
- **Modals & Drawers (Level 3):** Authentication sheets and the mobile legend drawer use a focused scrim (`rgba(15, 23, 42, 0.4)`) paired with a high-elevation shadow: `0 12px 32px -4px rgba(15, 23, 42, 0.16)`.

## Shapes

The interface balances soft modern curves with structured, utilitarian geometry:

- **Tokens & Inputs:** Inputs, interactive chips, and action buttons adhere to `roundedness: 2` (`0.5rem` / `8px`), offering a comfortable tactile target without feeling overly playful.
- **Cards & Modals:** Containers and floating cards use `rounded-lg` (`1rem` / `16px`) to define clear content boundaries against the page canvas.
- **Syntax Blocks:** Inline constituent blocks feature micro-radii (`0.25rem` / `4px`) with a continuous `2px` solid bottom indicator bar. 
- **Prepositional & Nested Boundaries:** Prepositional phrases utilize a `1px` dashed stroke border (`#94A3B8`) with zero background tint, while complex embedded clauses are enclosed within a solid `1px` border frame to denote scope.

## Components

### Top Navigation Bar
- Pinned at top (`z-index: 40`), featuring frosted glass (`backdrop-filter: blur(12px)`).
- Left: reading progress indicator (`"Sentence 3 of 12"`).
- Center: cloud sync badge (`↻ Syncing` / `☁️ Cloud Ready`).
- Right: user avatar trigger (`user@domain.com ▾`) opening an anchored dropdown menu with user meta, sync toggle, and sign out options.

### Bottom Control Toolbar
- Fixed bottom dock on mobile viewports; provides tactile navigation buttons:
  - **Previous / Next:** High-contrast buttons with tactile active states.
  - **Legend Toggle:** Quick trigger for grammar sheet.
  - **Translation Toggle:** `[译]` button to reveal translation drawers.
  - **Favorite Star:** Outlined `☆` toggles to solid colored `★` with a micro-scale bounce.

### Inline Grammar Highlighter
- Spans render with inline-block characteristics, maintaining padding (`0.125rem 0.375rem`) and continuous borders across line-wraps.
- Includes a dedicated `2px` colored bottom border matching the syntax label color.
- Interactive tap/hover reveals an inline floating tooltip containing the detailed grammar breakdown.

### Translation & Analysis Accordion Cards
- Structured card with a clean outline (`1px solid #E2E8F0`) and `rounded-lg` corners.
- Collapsible body container toggling smooth height transitions.
- Displays full parallel sentence translation, key vocabulary definitions, and clause breakdown notes.

### Legend Drawer / Side Panel
- Mobile: Pinned bottom sheet sliding up with a drag handle and clear categorized legend items.
- Desktop: Pinned `280px` right sidebar displaying constituent tags, paired background/text swatches, and shortcut hints.

### Modals & Dialogs
- Centered auth dialog (`max-width: 400px`) using `rounded-lg` corners, clean input fields with `0.5rem` radius, and a primary dark blue submission button (`#1B4F72`).