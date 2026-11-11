import react from '@astrojs/react'
import sitemap from '@astrojs/sitemap'
import solid from '@astrojs/solid-js'
import svelte from '@astrojs/svelte'
import vue from '@astrojs/vue'
import tailwindcss from '@tailwindcss/vite'
import icon from 'astro-icon'
import { defineConfig, fontProviders } from 'astro/config'

// https://astro.build/config
export default defineConfig({
  // Replace with your production domain. Used for canonical URLs and the sitemap.
  site: 'https://example.com',
  vite: {
    plugins: [
      tailwindcss(),
    ],
  },
  server: {
    port: 3000,
    host: true,
  },
  integrations: [
    sitemap(),
    vue(),
    solid({
      include: ['**/solid/*', '**/node_modules/@ark-ui/solid/**', '**/node_modules/@zag-js/solid/**'],
    }),
    react({
      include: ['**/react/*', '**/node_modules/@ark-ui/react/**', '**/node_modules/@zag-js/react/**'],
    }),
    svelte(),
    icon(),
  ],
  scopedStyleStrategy: 'where',
  fonts: [
    {
      provider: fontProviders.fontsource(),
      name: 'Inter',
      cssVariable: '--font-inter',
      weights: ['100 900'],
    },
  ],
})
