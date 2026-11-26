# Repository instructions

## Verification

- Order matches CI (`.github/workflows/ci.yml`): `npm ci` → `npm run lint` → `npm run typecheck` → `npm run build`.
- There is no test runner; `typecheck` is `astro check`. CI takes the Node version from `engines.node` in `package.json`.
- ESLint/EditorConfig require LF, 2-space indent, and a final newline in every file, including JSON/config files. Run `npm run lint:fix` after manual edits.

## Multi-framework wiring

- `tsconfig.json` sets `jsx: "preserve"`; each `.tsx` declares its own runtime via `/** @jsxImportSource react */` or `/** @jsxImportSource solid-js */`. Never set a global JSX transform.
- `astro.config.mjs` scopes the React and Solid integrations with `include` globs that also pull Ark UI/Zag JS sources out of `node_modules`; components added outside `src/components/<framework>/`, or new framework deps in `node_modules`, may need those globs updated.
- Islands are mounted with `client:only="vue|react|svelte|solid-js"` in `src/pages/index.astro`; components live under `src/components/<framework>/`. The `@/*` alias maps to `src/*`.
- `eslint.config.mjs` deliberately disables React rules in `components/solid/` and Solid rules in `components/react/` because both plugins lint JSX. Do not remove these overrides.

## Styling, theme, assets

- Tailwind v4 runs via `@tailwindcss/vite`; `src/styles/global.css` (imported in `src/layouts/default.astro`) is the only stylesheet and holds the theme tokens. There is no `tailwind.config.*`.
- Dark mode is a `.dark` class on `<html>`: the inline head script in `default.astro` reads `localStorage.color-theme` to prevent FOUC, and `src/stores/theme.ts` syncs the class plus both the `color-theme` and `theme` keys.
- Fonts use `fontProviders.fontsource()` in `astro.config.mjs` and `<Font cssVariable="--font-inter" />` in the layout; `global.css` maps it to Tailwind's `--font-sans`.
- Icons: `astro-icon()` serves `@iconify-json/lucide` offline; `src/icons/` is intentionally empty.

## Repo-specific gotchas

- `site` in `astro.config.mjs` is `https://example.com`; sitemap and canonical URLs are wrong until it is set to the deployed domain.
- The pre-commit hook (`simple-git-hooks`) runs `npx lint-staged` → `eslint --fix` on every staged file; inspect the staged diff after it runs.
- Dependabot groups weekly minor/patch updates and ignores TypeScript majors and `eslint-plugin-solid` minor/major; treat major bumps as deliberate decisions.
- `npm audit` currently reports 7 vulnerabilities whose only "fixes" are breaking downgrades of `@antfu/eslint-config`/`eslint-plugin-format`; do not run `npm audit fix --force` without asking.
- `dist/`, `.astro/`, and `node_modules/` are generated/ignored — never commit them.
