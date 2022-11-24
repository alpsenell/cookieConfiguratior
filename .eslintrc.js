module.exports = {
  root: true,
  env: {
    node: true,
  },
  'extends': [
    'plugin:vue/recommended',
    'eslint:recommended',
  ],
  parserOptions: {
    parser: '@babel/eslint-parser',
  },
  rules: {
    quotes: [
      'error',
      'single',
    ],
    semi: [
      'error',
      'always',
    ],
    indent: [
      'warn',
      2,
    ],
    curly: 'error',
    'array-element-newline': [
      'error',
      { 'minItems': 2 },
    ],
    'array-bracket-newline': [
      'error',
      { multiline: true },
    ],
    'space-before-function-paren': [
      'error',
      'never',
    ],
    'comma-dangle': [
      'warn',
      {
        arrays: 'always-multiline',
        objects: 'always-multiline',
        imports: 'always-multiline',
        exports: 'always-multiline',
        functions: 'always-multiline',
      },
    ],
    'vue/max-attributes-per-line': [
      'error',
      {
        singleline: 1,
        multiline: 1,
      },
    ],
    'vue/html-closing-bracket-newline': [
      'warn',
      {
        multiline: 'always',
        singleline: 'never',
      },
    ],
    'vue/require-component-is': 'off',
    'vue/no-unused-vars': 'warn',
    'vue/multi-word-component-names': 'off',
    'template-curly-spacing': [
      'error',
      'always',
    ],
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'spaced-comment': 'warn',
    'no-trailing-spaces': 'warn',
    'no-multiple-empty-lines': 'warn',
    'import/order': 0,
    'operator-linebreak': [
      'error',
      'before',
    ],
    'arrow-parens': [
      'error',
      'always',
    ],
    'newline-before-return': 'error',
  },
  overrides: [
    {
      files: [
        '**/__tests__/*.{j,t}s?(x)',
        '**/tests/unit/**/*.spec.{j,t}s?(x)',
      ],
      env: {
        mocha: true,
      },
    },
  ],
};
