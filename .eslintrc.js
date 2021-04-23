module.exports = {
  root: true,
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:react/recommended',
    'plugin:jest/recommended',
    'prettier',
  ],
  plugins: ['@typescript-eslint', 'react', 'jest'],
  parser: '@typescript-eslint/parser',
  env: {
    browser: true,
    node: true,
    es6: true,
    'jest/globals': true
  },
  settings: {
    react: {
      version: 'detect'
    }
  },
  parserOptions: {
    project: './tsconfig.json',
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true
    }
  },
  rules: {
    'react/react-in-jsx-scope': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off'
  },
  overrides: [
    {
      files: ['*.js'],
      rules: { '@typescript-eslint/no-var-requires': ['off'] }
    }
  ]
}
