import js from '@eslint/js';
import react from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import jsxA11y from 'eslint-plugin-jsx-a11y';
import prettier from 'eslint-config-prettier';

export default [
  {
    ignores: [
      'public/**/*',
      'dist/**/*',
      'build/**/*',
      'node_modules/**/*',
    ],
  },
  js.configs.recommended,

  react.configs.flat.recommended,
  react.configs.flat['jsx-runtime'],

  {
    plugins: {
      'react-hooks': reactHooks,
      'jsx-a11y': jsxA11y,
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
      ...jsxA11y.configs.recommended.rules,
      'react-hooks/exhaustive-deps': 'warn',
      'react/react-in-jsx-scope': 'off',
    },
  },

  prettier,
];
