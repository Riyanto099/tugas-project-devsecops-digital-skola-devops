
const { FlatCompat } = require('@eslint/eslintrc');
const js = require('@eslint/js');

const compat = new FlatCompat({
  recommendedConfig: js.configs.recommended,
  eslintrc: true,
});

module.exports = [
  js.configs.recommended,

  ...compat.config({
    env: {
      es2021: true,
      node: true,
      jest: true,
    },
    rules: {
      'no-unused-vars': ['warn', { argsIgnorePattern: '^_' }],
      'no-console': 'off',
      eqeqeq: ['error', 'always'],
    },
  }),

  {
    files: ['loadtest/**/*.js'],
    languageOptions: {
      globals: {
        __ENV: 'readonly',
        __VU: 'readonly',
        __ITER: 'readonly',
        __VU_ID: 'readonly',
        __VU_ID_IN_TEST: 'readonly',
      },
    },
  },
];
