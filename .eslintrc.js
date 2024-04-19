module.exports = {
  env: {
    'browser': true,
  },

  extends: [
    '@egiftcard/eslint-config',
    '@egiftcard/eslint-config/config/typescript',
  ],

  overrides: [{
    files: [
      '.eslintrc.js',
    ],
    parserOptions: {
      sourceType: 'script',
    },
    extends: [
      '@egiftcard/eslint-config/config/nodejs',
    ],
  }],
};
