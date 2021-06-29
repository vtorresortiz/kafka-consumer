module.exports = {
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js'],
      },
    },
  },
  env: {
    node: true,
    es2021: true,
  },
  extends: [
    'airbnb-base',
  ],
  parserOptions: {
    ecmaVersion: 2021,
    sourceType: 'module',
  },
  rules: {
    'no-console': ['error', { allow: ['log', 'error'] }],
    'import/extensions': ['error', 'ignorePackages', {
      mjs: 'never',
    }],
  },
};
