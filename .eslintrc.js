module.exports = {
  settings: {
    'import/resolver': {
      node: { extensions: ['.js', '.mjs'] },
    },
  },
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'airbnb-base',
  ],
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module',
  },
  rules: {
  },
};
