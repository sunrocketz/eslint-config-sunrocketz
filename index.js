/** @type {import('@types/eslint').Linter.Config} */
module.exports = {
  env: {
    browser: true,
    worker: true,
    jest: true,
    serviceworker: true,
    es6: true,
  },
  extends: [
    'next',
    'plugin:jsx-a11y/recommended',
    'plugin:promise/recommended',
    'plugin:react/jsx-runtime',
    'plugin:typescript-sort-keys/recommended',
    'plugin:unicorn/recommended',
    'prettier',
  ],
  plugins: [
    '@typescript-eslint',
    'import',
    'jsx-a11y',
    'simple-import-sort',
    'sort-destructure-keys',
    'sort-keys-fix',
    'typescript-sort-keys',
    'unused-imports',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: { warnOnUnsupportedTypeScriptVersion: false },
  rules: {
    '@typescript-eslint/consistent-type-imports': 'error',
    'accessor-pairs': 'error',
    'block-scoped-var': 'error',
    'comma-dangle': ['error', 'always-multiline'],
    'default-case-last': 'error',
    'default-case': 'error',
    'default-param-last': 'error',
    'eqeqeq': 'error',
    'grouped-accessor-pairs': 'error',
    'import/first': 'error',
    'import/newline-after-import': 'error',
    'import/no-anonymous-default-export': 'error',
    'import/no-duplicates': 'error',
    'jsx-a11y/alt-text': ['error', { elements: ['img'], img: ['Image'] }],
    'jsx-a11y/anchor-is-valid': 'off',
    'jsx-a11y/aria-props': 'error',
    'jsx-a11y/aria-proptypes': 'error',
    'jsx-a11y/aria-unsupported-elements': 'error',
    'jsx-a11y/label-has-associated-control': 'off',
    'jsx-a11y/label-has-for': 'off',
    'jsx-a11y/role-has-required-aria-props': 'error',
    'jsx-a11y/role-supports-aria-props': 'error',
    'jsx-quotes': ['error', 'prefer-single'],
    'linebreak-style': ['error', 'unix'],
    'no-alert': 'error',
    'no-await-in-loop': 'error',
    'no-eq-null': 'error',
    'no-eval': 'error',
    'no-loss-of-precision': 'error',
    'no-template-curly-in-string': 'error',
    'no-trailing-spaces': 'error',
    'no-unneeded-ternary': 'error',
    'no-unused-vars': 'off',
    'no-use-before-define': 'error',
    'no-useless-concat': 'error',
    'no-useless-return': 'error',
    'no-var': 'error',
    'no-whitespace-before-property': 'error',
    'prefer-const': 'error',
    'prefer-rest-params': 'error',
    'prefer-spread': 'error',
    'prefer-template': 'error',
    'quote-props': ['error', 'consistent'],
    'quotes': ['error', 'single', { avoidEscape: true }],
    'react/button-has-type': 'error',
    'react/destructuring-assignment': ['error', 'always'],
    'react/jsx-boolean-value': ['error', 'never'],
    'react/jsx-fragments': ['error', 'syntax'],
    'react/jsx-no-useless-fragment': 'error',
    'react/jsx-pascal-case': ['error', { allowNamespace: true, allowLeadingUnderscore: true }],
    'react/jsx-sort-props': 'error',
    'react/no-danger': 'error',
    'react/no-multi-comp': ['error', { ignoreStateless: true }],
    'react/no-unused-state': 'error',
    'react/prop-types': 'off',
    'react/react-in-jsx-scope': 'off',
    'react/self-closing-comp': 'error',
    'react/sort-comp': 'error',
    'require-await': 'error',
    'semi': ['error', 'never'],
    'simple-import-sort/exports': 'error',
    'simple-import-sort/imports': 'error',
    'sort-destructure-keys/sort-destructure-keys': 'error',
    'sort-keys-fix/sort-keys-fix': 'error',
    'sort-vars': 'error',
    'symbol-description': 'error',
    'unicorn/prefer-module': 'off',
    'unused-imports/no-unused-imports': 'error',
    'unused-imports/no-unused-vars': [
      'error',
      { vars: 'all', varsIgnorePattern: '^_', args: 'after-used', argsIgnorePattern: '^_' },
    ],
  },
}
