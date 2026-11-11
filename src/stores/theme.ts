import { atom } from 'nanostores'

export type Theme = 'light' | 'dark'

export const $theme = atom<Theme>('light')

export function toggleTheme() {
  const current = $theme.get()
  const next = current === 'light'
    ? 'dark'
    : 'light'
  $theme.set(next)
}

// Client-side initialization
if (typeof window !== 'undefined') {
  const initTheme = () => {
    // 1. Check store first? No, reliable source is localStorage or DOM on init.
    // Actually, default.astro already set the class. We just need to sync store to it.
    const isDark = document.documentElement.classList.contains('dark')
    $theme.set(isDark ? 'dark' : 'light')
  }

  initTheme()

  // Subscribe to store changes to update DOM
  $theme.subscribe((theme) => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark')
      localStorage.setItem('theme', 'dark')
      localStorage.setItem('color-theme', 'dark') // Sync with default.astro key
    }
    else {
      document.documentElement.classList.remove('dark')
      localStorage.setItem('theme', 'light')
      localStorage.setItem('color-theme', 'light')
    }
  })
}
