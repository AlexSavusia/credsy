module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  extends: [
    'plugin:@typescript-eslint/recommended',
    'plugin:nuxt/recommended',
    'plugin:vue/vue3-recommended',
    'plugin:prettier/recommended',
  ],
  plugins: ['prettier', 'vue', '@typescript-eslint', 'nuxt'],
  rules: {
    'no-unused-expressions': 'off',
    'vue/no-v-html': 'off',
    'no-console': ['error', { allow: ['warn', 'error'] }],
  },
}
