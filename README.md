# 🚀 Astro Ultimate Starter Kit

A robust, multi-framework starter kit built with **Astro**, **Tailwind CSS v4**, and **Ark UI**. Designed for scalability, performance, and modern developer experience.

![Astro](https://img.shields.io/badge/Astro-7.0-orange?style=flat&logo=astro)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4-38bdf8?style=flat&logo=tailwindcss)
![Ark UI](https://img.shields.io/badge/Ark_UI-v5-eb5e41?style=flat)
![Multi-Framework](https://img.shields.io/badge/Frameworks-React_|_Vue_|_Svelte_|_Solid-blueviolet)
[![code style](https://antfu.me/badge-code-style.svg)](https://github.com/antfu/eslint-config)

## ✨ Features

- **Multi-Framework Support**: Seamlessly render **React**, **Vue 3**, **Svelte 5**, and **SolidJS** components side-by-side using Astro Islands.
- **Headless UI**: Integrated [Ark UI](https://ark-ui.com/) for accessible, unstyled components across all frameworks.
- **Styling**: Powered by [Tailwind CSS v4](https://tailwindcss.com/) (Vite integration) with a consistent design system.
- **State Management**: Zero-config shared state between frameworks using [Nano Stores](https://github.com/nanostores/nanostores).
- **Dark Mode**: Fully implemented with a flicker-free toggle, persisted to `localStorage`, and synced with Nano Stores.
- **Icons**: [Iconify](https://iconify.design/) integration via `astro-icon` and framework-specific libraries (`@iconify/react`, etc.), utilizing the `lucide` icon set offline.
- **Code Quality**: Pre-configured **ESLint** with the opinionated [@antfu/eslint-config](https://github.com/antfu/eslint-config).
- **TypeScript**: Full type safety enabled for all frameworks.

## 🛠️ Tech Stack

| Category         | Technology                                                         |
| ---------------- | ------------------------------------------------------------------ |
| **Core**         | [Astro](https://astro.build/)                                      |
| **Styling**      | [Tailwind CSS v4](https://tailwindcss.com/)                        |
| **UI Primitive** | [Ark UI](https://ark-ui.com/)                                      |
| **State**        | [Nano Stores](https://github.com/nanostores/nanostores)            |
| **Icons**        | [Iconify](https://iconify.design/) + [Lucide](https://lucide.dev/) |
| **Linting**      | [ESLint](https://eslint.org/) (@antfu)                             |

## 📂 Project Structure

```text
/
├── src/
│   ├── components/
│   │   ├── react/        # React components
│   │   ├── solid/        # SolidJS components
│   │   ├── svelte/       # Svelte components
│   │   ├── vue/          # Vue components
│   │   ├── ThemeToggle.astro # Zero-JS toggle component
│   ├── layouts/
│   │   └── default.astro # Base layout with dark mode init script
│   ├── pages/
│   │   └── index.astro   # Main entry point
│   ├── stores/
│   │   ├── counter.ts    # Example shared atom store
│   │   └── theme.ts      # Theme state management
│   └── styles/
│       └── global.css    # Tailwind v4 imports & custom variants
├── astro.config.mjs      # Configuration for integrations
├── eslint.config.mjs     # Antfu ESLint config
└── package.json
```

## 🧞 Getting Started

1.  **Install Dependencies**

    ```bash
    npm install
    ```

2.  **Run Development Server**

    ```bash
    npm run dev
    ```

3.  **Build for Production**
    ```bash
    npm run build
    ```

## 📜 Available Commands

| Command              | Description                                 |
| :------------------- | :------------------------------------------ |
| `npm run dev`        | Start the development server                |
| `npm run build`      | Build the site for production               |
| `npm run preview`    | Preview the production build locally        |
| `npm run lint`       | Run ESLint to check for code quality issues |
| `npm run lint:fix`   | Run ESLint and auto-fix fixable issues      |
| `npm run type-check` | Run Astro's type checker                    |
| `npm run astro`      | Access the Astro CLI directly               |

## 🧩 Key Concepts

### Shared State (Nano Stores)

Components from different frameworks can read and write to the same state.

```ts
// src/stores/counter.ts
import { atom } from 'nanostores'

export const $counter = atom(0)
```

### Dark Mode

Dark mode is handled by `src/stores/theme.ts` and applied via a `dark` class on `<html>`. The `theme` is persisted in `localStorage`.

- **Toggle**: `src/components/ThemeToggle.astro` handles user interaction.
- **Init**: `src/layouts/default.astro` contains an inline script to prevent FOUC (Flash of Unstyled Content).

### Icons

Use icons easily in any file:

- **Astro**: `<Icon name="lucide:home" />`
- **React**: `<Icon icon="lucide:home" />`
- **Vue**: `<Icon icon="lucide:home" />`
- **Svelte**: `<Icon icon="lucide:home" />`
- **Solid**: `<Icon icon="lucide:home" />`
