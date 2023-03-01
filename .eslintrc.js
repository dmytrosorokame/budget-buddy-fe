module.exports = {
  parser: '@typescript-eslint/parser',
  extends: [
    'next/core-web-vitals',
    'plugin:react/recommended', // Uses the recommended rules from @eslint-plugin-react
    'plugin:prettier/recommended',
    'plugin:jsx-a11y/recommended',
  ],
  globals: {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__: true,
  },
  plugins: ['react-hooks', 'import', 'unused-imports', 'jsx-a11y', 'no-relative-import-paths'],
  parserOptions: {
    ecmaVersion: 2018, // Allows for the parsing of modern ECMAScript features
    sourceType: 'module', // Allows for the use of imports
    ecmaFeatures: {
      jsx: true, // Allows for the parsing of JSX
    },
  },
  rules: {
    'prettier/prettier': 'error',

    // import rules
    'import/order': [
      'error',
      {
        groups: ['builtin', 'external', 'internal', 'parent', 'sibling', 'index'],
        'newlines-between': 'always',
        alphabetize: {
          order: 'asc',
          caseInsensitive: true,
        },
      },
    ],
    'no-relative-import-paths/no-relative-import-paths': ['error', { allowSameFolder: true, rootDir: 'src' }],
    'import/no-unused-modules': ['error', { unusedExports: true, missingExports: true }],
    'import/no-unresolved': 'error',
    'unused-imports/no-unused-imports-ts': 'error',
    'no-restricted-imports': [
      'error',
      {
        paths: [
          {
            name: 'next-i18next',
            importNames: ['useTranslation', 'Trans'],
            message: `Use import from 'utils/next-with-i18n' instead`,
          },
          {
            name: 'react-i18next',
            importNames: ['useTranslation', 'Trans'],
            message: `Use import from 'utils/next-with-i18n' instead`,
          },
        ],
      },
    ],
    'import/no-duplicates': 'error',

    // new lines rules
    'object-curly-newline': 'error',
    'newline-before-return': 'error',
    'newline-after-var': 'error',
    'eol-last': 'error',

    // js basic rules
    'arrow-body-style': 'off',
    'no-console': ['error', { allow: ['warn', 'error'] }],
    'no-fallthrough': 'error',
    'no-return-await': 'error',

    // react rules
    'react/prop-types': 'off',
    'react/no-unescaped-entities': 'off',
    'react-hooks/rules-of-hooks': 'error', // Checks rules of Hooks
    'react-hooks/exhaustive-deps': 'warn', // Checks effect dependencies,
    'react/jsx-curly-brace-presence': 'warn',
    'react/jsx-uses-react': 'off',
    'react/react-in-jsx-scope': 'off',

    // a11y
    'jsx-a11y/anchor-is-valid': 'off',
    'jsx-a11y/anchor-has-content': 'off',
    'jsx-a11y/no-autofocus': 'off',
    'jsx-a11y/click-events-have-key-events': 'off',

    // nextjs rules
    '@next/next/google-font-preconnect': 'off',
  },
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      extends: [
        'plugin:@typescript-eslint/recommended', // Uses the recommended rules from @typescript-eslint/eslint-plugin
        'plugin:import/typescript',
      ],
      parserOptions: {
        project: ['./tsconfig.json'],
      },
      rules: {
        '@typescript-eslint/explicit-function-return-type': [
          'error',
          {
            allowExpressions: true,
            allowTypedFunctionExpressions: true,
          },
        ],
        'jsx-a11y/no-static-element-interactions': 'error',
        '@typescript-eslint/explicit-module-boundary-types': 'error',
        '@typescript-eslint/no-explicit-any': 'error',
        '@typescript-eslint/no-unused-vars': 'error',
        '@typescript-eslint/ban-ts-comment': 'off',
        '@typescript-eslint/naming-convention': [
          'error',
          {
            selector: ['default', 'variable', 'property', 'parameter', 'objectLiteralProperty', 'method'],
            format: ['camelCase', 'PascalCase'],
            leadingUnderscore: 'forbid',
            trailingUnderscore: 'forbid',
          },
          {
            selector: 'variable',
            modifiers: ['const'],
            format: ['UPPER_CASE', 'camelCase'],
          },
          {
            selector: 'variable',
            types: ['function'],
            format: ['camelCase', 'PascalCase'],
          },
          {
            selector: ['enum', 'class'],
            format: ['PascalCase'],
            leadingUnderscore: 'forbid',
            trailingUnderscore: 'forbid',
          },
          {
            selector: 'enumMember',
            format: ['UPPER_CASE'],
            leadingUnderscore: 'forbid',
            trailingUnderscore: 'forbid',
          },
          {
            selector: ['typeAlias', 'typeParameter'],
            prefix: ['T'],
            format: ['PascalCase'],
            leadingUnderscore: 'forbid',
            trailingUnderscore: 'forbid',
          },
          {
            selector: 'interface',
            prefix: ['I'],
            format: ['PascalCase'],
            leadingUnderscore: 'forbid',
            trailingUnderscore: 'forbid',
          },
          {
            selector: 'variable',
            modifiers: ['destructured'],
            format: null,
          },
          {
            selector: ['objectLiteralProperty'],
            format: null,
            modifiers: ['public'],
          },
          {
            selector: [
              'classProperty',
              'objectLiteralProperty',
              'typeProperty',
              'classMethod',
              'objectLiteralMethod',
              'typeMethod',
              'accessor',
              'enumMember',
            ],
            format: null,
            modifiers: ['requiresQuotes'],
          },
        ],
      },
    },
    {
      files: ['*.test.*', '*.spec.*', 'src/pages/**/*', '*.js'],
      rules: {
        'import/no-unused-modules': 'off',
      },
    },
  ],
  settings: {
    react: {
      version: 'detect', // Tells eslint-plugin-react to automatically detect the version of React to use
    },
    'import/external-module-folders': ['node_modules'],
    'import/resolver': {
      node: {
        paths: ['src'],
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
        moduleDirectory: ['node_modules', 'src/'],
      },
    },
  },
};
