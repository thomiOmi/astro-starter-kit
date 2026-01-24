import antfu from '@antfu/eslint-config'

export default antfu(
  {
    stylistic: true,
    formatters: true,
    typescript: true,
    vue: {
      a11y: true,
    },
    astro: true,
    react: true,
    svelte: true,
    solid: true,
  },
  {
    files: ['**/components/solid/**/*'],
    rules: {
      'react/no-unknown-property': 'off',
      'react/no-unescaped-entities': 'off',
      'react/jsx-no-undef': 'off',
    },
  },
  {
    files: ['**/components/react/**/*'],
    rules: {
      'solid/no-unknown-property': 'off',
      'solid/no-innerhtml': 'off',
      'solid/no-react-specific-props': 'off',
    },
  },
)
