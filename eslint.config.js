import globals from 'globals'
import js from '@eslint/js'
import eslintConfigPrettier from 'eslint-config-prettier'
import jsxA11y from 'eslint-plugin-jsx-a11y'
import eslintPluginPrettier from 'eslint-plugin-prettier'
import pluginReact from 'eslint-plugin-react'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import unusedImports from 'eslint-plugin-unused-imports'
import tseslint from 'typescript-eslint'

export default tseslint.config(
  { ignores: ['dist', 'src/gql', '**/*.generated.ts', '**/*.gen.ts'] },
  pluginReact.configs.flat.recommended, // ? https://github.com/jsx-eslint/eslint-plugin-react
  pluginReact.configs.flat['jsx-runtime'], // ? https://github.com/jsx-eslint/eslint-plugin-react
  {
    settings: {
      react: {
        version: 'detect'
      }
    }
  },
  eslintConfigPrettier, // ? https://github.com/prettier/eslint-config-prettier
  {
    extends: [js.configs.recommended, ...tseslint.configs.recommended],
    files: ['**/*.{ts,tsx}'],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser
    },
    plugins: {
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
      prettier: eslintPluginPrettier,
      'unused-imports': unusedImports,
      'jsx-a11y': jsxA11y
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
      ...jsxA11y.configs.recommended.rules,

      // React best practices
      'react-hooks/exhaustive-deps': 'warn', // Enforce dependencies in hooks
      'react/jsx-key': 'error', // Enforce key prop in iterators
      'react/jsx-no-duplicate-props': 'error', // Prevent duplicate props
      'react/jsx-no-undef': 'error', // Disallow undeclared variables in JSX
      'react/jsx-uses-react': 'error', // Prevent React being marked as unused
      'react/jsx-uses-vars': 'error', // Prevent variables used in JSX being marked as unused
      'react/no-children-prop': 'error', // Prevent passing children as props
      'react/no-danger-with-children': 'error', // Prevent using dangerouslySetInnerHTML with children
      'react/no-deprecated': 'warn', // Warn about deprecated methods
      'react/no-direct-mutation-state': 'error', // Prevent direct mutation of state
      'react/no-find-dom-node': 'warn', // Warn about using findDOMNode
      'react/no-is-mounted': 'error', // Prevent using isMounted
      'react/no-render-return-value': 'error', // Prevent using render return value
      'react/no-string-refs': 'error', // Prevent string refs
      'react/no-unescaped-entities': 'warn', // Warn about unescaped entities in JSX
      'react/no-unknown-property': 'warn', // Warn about unknown DOM properties
      'react/self-closing-comp': 'warn', // Enforce self-closing tags

      // React Hooks best practices
      'react-hooks/rules-of-hooks': 'error', // Enforce Rules of Hooks

      // Accessibility rules
      'jsx-a11y/alt-text': 'warn', // Enforce alt text for images
      'jsx-a11y/anchor-has-content': 'warn', // Enforce anchors have content
      'jsx-a11y/aria-props': 'error', // Validate ARIA props
      'jsx-a11y/aria-proptypes': 'error', // Validate ARIA prop values
      'jsx-a11y/aria-role': 'error', // Validate ARIA roles
      'jsx-a11y/role-has-required-aria-props': 'error', // Enforce required ARIA props
      'jsx-a11y/img-redundant-alt': 'warn', // Prevent redundant alt text
      'jsx-a11y/no-access-key': 'warn', // No access keys
      'jsx-a11y/no-autofocus': 'warn', // No autofocus

      // Other rules
      'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],
      'no-console': 'warn',
      '@typescript-eslint/no-unused-vars': 'off',
      'react/react-in-jsx-scope': 'off',
      'react/display-name': 'off',
      'react/prop-types': 'off',
      'react/jsx-curly-brace-presence': ['warn', { props: 'never', children: 'ignore' }],
      '@typescript-eslint/no-unused-expressions': 'off',
      'import/no-unresolved': 'off',
      'import/no-named-as-default': 'off',
      // ! TO COMPILE SHADCN EXAMPLES, PLEASE REMOVE AS NEEDED
      '@typescript-eslint/no-explicit-any': 'off',
      '@typescript-eslint/no-empty-object-type': 'off',
      '@typescript-eslint/ban-ts-comment': 'off',
      'tailwindcss/no-unnecessary-arbitrary-value': 'off',
      'tailwindcss/classnames-order': 'off',
      'import/named': 'off',
      'import/no-named-as-default-member': 'off',
      'prettier/prettier': ['error'],
      'arrow-body-style': ['error', 'as-needed'],
      'no-unused-vars': 'off', // or "@typescript-eslint/no-unused-vars": "off",
      'unused-imports/no-unused-imports': 'error',
      'unused-imports/no-unused-vars': [
        'warn',
        {
          vars: 'all',
          varsIgnorePattern: '^_',
          args: 'after-used',
          argsIgnorePattern: '^_',
          destructuredArrayIgnorePattern: '^_',
          caughtErrorsIgnorePattern: '^_',
          ignoreRestSiblings: true
        }
      ]
    }
  }
)
