import js from '@eslint/js';
import tseslint from 'typescript-eslint';
import react from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import jsxA11y from 'eslint-plugin-jsx-a11y';
import tailwindcss from 'eslint-plugin-tailwindcss';
import prettier from 'eslint-config-prettier';

export default tseslint.config(
  // 1. Global Ignores (Skips public, build, and node_modules folders)
  {
    ignores: [
      'public/**/*',
      'dist/**/*',
      'build/**/*',
      'node_modules/**/*',
    ],
  },

  // 2. Core JS & TypeScript Recommended Configurations
  js.configs.recommended,
  ...tseslint.configs.recommended,

  // 3. React Settings & Recommended Configs
  {
    settings: {
      react: {
        version: 'detect',
      },
      tailwindcss: {
        cssConfigPath: './app/app.css',
      },
    },
  },
  react.configs.flat.recommended,
  react.configs.flat['jsx-runtime'],

  // 4. Tailwind CSS Flat Config
  ...(tailwindcss.configs['flat/recommended'] || [tailwindcss.configs.recommended]),

  // 5. Register Plugins & Assign Rules for Hooks, Accessibility, and Custom Rules
  {
    files: ['**/*.{js,jsx,ts,tsx}'],
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

  // 6. Prettier Configuration (Must be last to override formatting rules)
  prettier,
);
