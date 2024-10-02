import js from '@eslint/js';
import globals from 'globals';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import tseslint from 'typescript-eslint';

export default [
  js.configs.recommended,
  ...tseslint.configs.recommended,
  {
    ignores: ['dist'], // Игнорируем папку dist
    files: ['**/*.{ts,tsx}'], // Указываем типы файлов для проверки
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
    plugins: {
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
    },
    rules: {
      // React and JSX rules similar to Airbnb's configuration
      'react/jsx-props-no-spreading': 'off',
      'react/prop-types': 'off', // Airbnb expects prop-types, but you can disable it for TypeScript

      // Best practices
      'no-console': ['warn', { allow: ['warn', 'error'] }],
      'no-debugger': 'warn',
      'no-alert': 'warn',
      'consistent-return': 'error',

      // Styling and formatting
      'semi': ['error', 'always'],
      'comma-dangle': ['error', 'always-multiline'],
      'indent': ['error', 2, { SwitchCase: 1 }],
      'no-trailing-spaces': 'error',
      'eol-last': ['error', 'always'],
      'object-curly-spacing': ['error', 'always'],
      'array-bracket-spacing': ['error', 'never'],

      'import/prefer-default-export': 'off',
      'import/no-unresolved': 'off', // Useful for monorepos and absolute imports

      // Hooks and React-specific rules
      ...reactHooks.configs.recommended.rules,
      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true },
      ],
      quotes: ['error', 'double'], // Использование двойных кавычек
    },
  },
];
