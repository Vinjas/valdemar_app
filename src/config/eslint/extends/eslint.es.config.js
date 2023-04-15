/* eslint-disable no-magic-numbers */
module.exports = {
  env: {
    es2022: true
  },
  parserOptions: {
    sourceType: 'module'
  },
  plugins: [
    'import',
    'promise'
  ],
  rules: {

    // es5 rules
    'accessor-pairs': 'off',
    'array-bracket-newline': [ 'error', { multiline: true }],
    'array-bracket-spacing': [ 'error', 'always', { arraysInArrays: false, objectsInArrays: false }],
    'array-callback-return': 'error',
    'array-element-newline': 'off',
    'block-scoped-var': 'error',
    'block-spacing': [ 'error', 'always' ],
    'brace-style': [ 'error', '1tbs', { allowSingleLine: false }],
    'camelcase': [ 'error', { properties: 'never' }],
    'capitalized-comments': 'off',
    'comma-dangle': [ 'error', 'never' ],
    'comma-spacing': [ 'error', { before: false, after: true }],
    'comma-style': [ 'error', 'last' ],
    'complexity': [ 'error', 12 ],
    'computed-property-spacing': [ 'error', 'never' ],
    'consistent-return': 'error',
    'consistent-this': [ 'error', '_this' ],
    'curly': [ 'error', 'all' ],
    'default-case-last': 'error',
    'default-case': 'off',
    'default-param-last': 'off',
    'dot-location': [ 'error', 'property' ],
    'dot-notation': [ 'error', { allowKeywords: true, allowPattern: '' }],
    'eol-last': 'error',
    'eqeqeq': 'error',
    'for-direction': 'error',
    'func-call-spacing': [ 'error', 'never' ],
    'func-name-matching': 'off',
    'func-style': [ 'error', 'declaration', { allowArrowFunctions: true }],
    'function-call-argument-newline': 'off',
    'function-paren-newline': [ 'error', 'consistent' ],
    'getter-return': 'error',
    'grouped-accessor-pairs': 'off',
    'guard-for-in': 'error',
    'id-denylist': 'off',
    'id-length': 'off',
    'id-match': 'off',
    'indent': [
      'error', 2, {
        outerIIFEBody: 1,
        SwitchCase: 0,
        VariableDeclarator: 1,
        MemberExpression: 'off',
        FunctionDeclaration: {
          parameters: 2,
          body: 1
        },
        FunctionExpression: {
          parameters: 2,
          body: 1
        },
        CallExpression: {
          arguments: 1
        },
        ArrayExpression: 1,
        ObjectExpression: 1,
        ImportDeclaration: 1,
        flatTernaryExpressions: false,
        ignoredNodes: [
          'JSXIdentifier',
          'JSXMemberExpression',
          'JSXNamespacedName',
          'JSXEmptyExpression',
          'JSXExpressionContainer',
          'JSXSpreadChild',
          'JSXBoundaryElement',
          'JSXOpeningElement',
          'JSXClosingElement',
          'JSXAttribute',
          'JSXSpreadAttribute',
          'JSXText',
          'JSXElement',
          'JSXFragment'
        ],
        ignoreComments: false
      }
    ],
    'init-declarations': 'off',
    'key-spacing': [ 'error', { beforeColon: false, afterColon: true, mode: 'strict' }],
    'keyword-spacing': [ 'error', { before: true, after: true }],
    'line-comment-position': 'off',
    'linebreak-style': [ 'error', 'unix' ],
    'lines-around-comment': 'off',
    'lines-around-directive': 'off',
    'max-depth': 'off',
    'max-len': [ 'error', 120, 2, { ignoreComments: false, ignoreStrings: true, ignoreUrls: true, ignoreTemplateLiterals: true, ignoreRegExpLiterals: true }],
    'max-lines-per-function': 'off',
    'max-lines': 'off',
    'max-nested-callbacks': [ 'error', 7 ],
    'max-params': 'off',
    'max-statements-per-line': [ 'error', { max: 1 }],
    'max-statements': 'off',
    'multiline-comment-style': 'warn',
    'multiline-ternary': 'off',
    'new-cap': [ 'error', { newIsCap: true, capIsNew: false, properties: false }],
    'new-parens': 'error',
    'newline-before-return': 'off',
    'newline-per-chained-call': 'off',
    'no-alert': 'error',
    'no-array-constructor': 'error',
    'no-bitwise': 'off',
    'no-caller': 'error',
    'no-case-declarations': 'error',
    'no-compare-neg-zero': 'error',
    'no-cond-assign': [ 'error', 'always' ],
    'no-console': 'warn',
    'no-constant-condition': 'error',
    'no-continue': 'error',
    'no-control-regex': 'error',
    'no-debugger': 'error',
    'no-delete-var': 'error',
    'no-div-regex': 'error',
    'no-dupe-args': 'error',
    'no-dupe-else-if': 'error',
    'no-dupe-keys': 'error',
    'no-duplicate-case': 'error',
    'no-else-return': 'error',
    'no-empty-character-class': 'error',
    'no-empty-function': [ 'error', { allow: [ 'arrowFunctions' ] }],
    'no-empty': [ 'error', { allowEmptyCatch: true }],
    'no-eq-null': 'off',
    'no-eval': 'error',
    'no-ex-assign': 'error',
    'no-extend-native': 'error',
    'no-extra-bind': 'error',
    'no-extra-boolean-cast': 'error',
    'no-extra-label': 'error',
    'no-extra-parens': [ 'error', 'all', { ignoreJSX: 'multi-line', nestedBinaryExpressions: false }],
    'no-extra-semi': 'error',
    'no-fallthrough': 'error',
    'no-floating-decimal': 'error',
    'no-func-assign': 'error',
    'no-global-assign': 'error',
    'no-implicit-coercion': 'off',
    'no-implicit-globals': 'error',
    'no-implied-eval': 'error',
    'no-inline-comments': 'error',
    'no-inner-declarations': [ 'error', 'functions' ],
    'no-invalid-regexp': 'error',
    'no-invalid-this': 'error',
    'no-irregular-whitespace': 'error',
    'no-label-var': 'error',
    'no-labels': 'error',
    'no-lone-blocks': 'error',
    'no-lonely-if': 'error',
    'no-loop-func': 'error',
    'no-loss-of-precision': 'error',
    'no-magic-numbers': [ 'error', { ignore: [ 0, 1, -1 ], ignoreArrayIndexes: true }],
    'no-misleading-character-class': 'error',
    'no-mixed-operators': 'error',
    'no-mixed-spaces-and-tabs': 'error',
    'no-multi-assign': 'error',
    'no-multi-spaces': 'error',
    'no-multi-str': 'error',
    'no-multiple-empty-lines': [ 'error', { max: 1, maxEOF: 1, maxBOF: 1 }],
    'no-negated-condition': 'off',
    'no-nested-ternary': 'off',
    'no-new-func': 'error',
    'no-new-object': 'error',
    'no-new-wrappers': 'error',
    'no-new': 'error',
    'no-nonoctal-decimal-escape': 'error',
    'no-obj-calls': 'error',
    'no-octal-escape': 'error',
    'no-octal': 'error',
    'no-param-reassign': [ 'error', { props: false }],
    'no-plusplus': 'off',
    'no-proto': 'error',
    'no-prototype-builtins': 'off',
    'no-redeclare': [ 'error', { builtinGlobals: true }],
    'no-regex-spaces': 'error',
    'no-restricted-globals': 'off',
    'no-restricted-properties': 'off',
    'no-restricted-syntax': 'off',
    'no-return-assign': [ 'error', 'always' ],
    'no-script-url': 'error',
    'no-self-assign': 'error',
    'no-self-compare': 'error',
    'no-sequences': 'error',
    'no-setter-return': 'error',
    'no-shadow-restricted-names': 'error',
    'no-shadow': 'off',
    'no-sparse-arrays': 'error',
    'no-tabs': 'error',
    'no-ternary': 'off',
    'no-throw-literal': 'error',
    'no-trailing-spaces': 'error',
    'no-undef-init': 'warn',
    'no-undef': 'warn',
    'no-undefined': 'warn',
    'no-underscore-dangle': 'off',
    'no-unexpected-multiline': 'error',
    'no-unmodified-loop-condition': 'error',
    'no-unneeded-ternary': 'error',
    'no-unreachable-loop': 'error',
    'no-unreachable': 'error',
    'no-unsafe-finally': 'off',
    'no-unsafe-negation': 'error',
    'no-unsafe-optional-chaining': 'off',
    'no-unused-expressions': 'off',
    'no-unused-labels': 'error',
    'no-unused-vars': 'warn',
    'no-use-before-define': 'off',
    'no-useless-backreference': 'error',
    'no-useless-call': 'error',
    'no-useless-catch': 'error',
    'no-useless-concat': 'error',
    'no-useless-escape': 'error',
    'no-useless-return': 'error',
    'no-void': 'error',
    'no-warning-comments': [ 'error', { terms: [ 'todo', 'fixme' ], location: 'start' }],
    'no-whitespace-before-property': 'error',
    'no-with': 'error',
    'nonblock-statement-body-position': 'off',
    'object-curly-newline': 'off',
    'object-curly-spacing': [ 'error', 'always', { arraysInObjects: true, objectsInObjects: true }],
    'object-property-newline': 'off',
    'one-var-declaration-per-line': [ 'error', 'initializations' ],
    'operator-assignment': 'off',
    'operator-linebreak': [ 'off', 'after', { overrides: { '?': 'before', ':': 'before' } }],
    'padded-blocks': [ 'error', 'never' ],
    'padding-line-between-statements': [
      'error',
      { blankLine: 'always', prev: '*', next: 'return' },
      { blankLine: 'always', prev: '*', next: 'try' },
      { blankLine: 'always', prev: '*', next: 'throw' },
      { blankLine: 'any', prev: 'block-like', next: 'throw' },
      { blankLine: 'always', prev: [ 'const', 'let', 'var' ], next: '*' },
      { blankLine: 'any', prev: [ 'const', 'let', 'var' ], next: [ 'const', 'let', 'var' ] },
      { blankLine: 'never', prev: '*', next: [ 'break', 'case', 'default' ] },
      { blankLine: 'always', prev: '*', next: 'cjs-export' },
      { blankLine: 'always', prev: 'cjs-import', next: '*' },
      { blankLine: 'any', prev: 'cjs-import', next: 'cjs-import' },
      { blankLine: 'always', prev: '*', next: 'class' },
      { blankLine: 'always', prev: 'directive', next: '*' },
      { blankLine: 'any', prev: 'directive', next: 'directive' },
      { blankLine: 'always', prev: '*', next: [ 'do', 'if', 'while', 'for', 'switch' ] },
      { blankLine: 'any', prev: [ 'do', 'if', 'while', 'for', 'switch' ], next: [ 'do', 'if', 'while', 'for', 'switch' ] },
      { blankLine: 'always', prev: [ 'do', 'if', 'while', 'for', 'switch' ], next: '*' },
      { blankLine: 'any', prev: [ 'do', 'if', 'while', 'for', 'switch' ], next: [ 'do', 'if', 'while', 'for', 'switch' ] },
      { blankLine: 'always', prev: 'import', next: '*' },
      { blankLine: 'any', prev: 'import', next: 'import' },
      { blankLine: 'always', prev: '*', next: 'export' },
      { blankLine: 'always', prev: '*', next: 'function' },
      { blankLine: 'any', prev: [ 'block', 'block-like' ], next: 'function' }
    ],
    'prefer-exponentiation-operator ': 'off',
    'prefer-regex-literals': 'error',
    'quote-props': [ 'error', 'consistent-as-needed' ],
    'quotes': [ 'error', 'single' ],
    'radix': [ 'error', 'as-needed' ],
    'require-jsdoc': 'off',
    'require-unicode-regexp': 'off',
    'semi-spacing': [ 'error', { before: false, after: true }],
    'semi-style': [ 'error', 'last' ],
    'semi': [ 'error', 'always' ],
    'sort-keys': 'off',
    'sort-vars': 'off',
    'space-before-blocks': [ 'error', 'always' ],
    'space-before-function-paren': [
      'error', {
        anonymous: 'never',
        named: 'never',
        asyncArrow: 'always'
      }
    ],
    'space-in-parens': [ 'error', 'never' ],
    'space-infix-ops': 'error',
    'space-unary-ops': [ 'error', { words: true, nonwords: false }],
    'spaced-comment': 'warn',
    'strict': [ 'error', 'never' ],
    'switch-colon-spacing': [ 'error', { after: true, before: false }],
    'unicode-bom': [ 'error', 'never' ],
    'use-isnan': 'error',
    'valid-jsdoc': [
      'error', {
        prefer: {
          return: 'returns'
        },
        preferType: {
          array: 'Array',
          Boolean: 'boolean',
          Number: 'number',
          String: 'string'
        },
        requireParamDescription: true,
        requireReturn: false,
        requireReturnDescription: true
      }
    ],
    'valid-typeof': [ 'error', { requireStringLiterals: true }],
    'vars-on-top': 'error',
    'wrap-iife': [ 'error', 'outside' ],
    'wrap-regex': 'off',
    'yoda': [ 'error', 'never' ],

    // es6 rules
    'arrow-body-style': [ 'error', 'as-needed' ],
    'arrow-parens': [ 'error', 'always' ],
    'arrow-spacing': [ 'error', { before: true, after: true }],
    'class-methods-use-this': 'off',
    'constructor-super': 'error',
    'func-names': [ 'error', 'never', { generators: 'as-needed' }],
    'generator-star-spacing': [ 'error', 'after' ],
    'implicit-arrow-linebreak': 'off',
    'lines-between-class-members': 'off',
    'max-classes-per-file': 'off',
    'no-class-assign': 'error',
    'no-confusing-arrow': [ 'off', { allowParens: true }],
    'no-const-assign': 'error',
    'no-constructor-return': 'off',
    'no-dupe-class-members': 'error',
    'no-duplicate-imports': 'error',
    'no-empty-pattern': 'error',
    'no-import-assign': 'off',
    'no-iterator': 'error',
    'no-new-symbol': 'error',
    'no-restricted-exports': 'off',
    'no-restricted-imports': 'off',
    'no-restricted-modules': 'off',
    'no-template-curly-in-string': 'error',
    'no-this-before-super': 'error',
    'no-useless-computed-key': 'error',
    'no-useless-constructor': 'error',
    'no-useless-rename': 'error',
    'no-var': 'error',
    'object-shorthand': [
      'error',
      'always',
      { avoidQuotes: true, avoidExplicitReturnArrows: true }
    ],
    'one-var': [ 'error', { initialized: 'never' }],
    'prefer-arrow-callback': [
      'error',
      { allowNamedFunctions: false, allowUnboundThis: false }
    ],
    'prefer-const': [ 'error', { destructuring: 'all' }],
    'prefer-destructuring': [
      'error',
      { array: true, object: true },
      { enforceForRenamedProperties: false }
    ],
    'prefer-exponentiation-operator': 'off',
    'prefer-numeric-literals': 'off',
    'prefer-promise-reject-errors': 'off',
    'prefer-rest-params': 'error',
    'prefer-spread': 'error',
    'prefer-template': 'error',
    'require-atomic-updates': 'error',
    'require-yield': 'error',
    'rest-spread-spacing': [ 'error', 'never' ],
    'sort-imports': 'off',
    'symbol-description': 'error',
    'template-curly-spacing': [ 'error', 'always' ],
    'template-tag-spacing': [ 'error', 'always' ],
    'yield-star-spacing': [ 'error', 'after' ],

    'promise/catch-or-return': 'error',
    'promise/no-return-wrap': 'error',
    'promise/param-names': 'error',
    'promise/always-return': 'off',
    'promise/no-native': 'off',
    'promise/no-nesting': 'off',
    'promise/no-promise-in-callback': 'error',
    'promise/no-callback-in-promise': 'off',
    'promise/avoid-new': 'off',
    'promise/no-new-statics': 'error',
    'promise/no-return-in-finally': 'error',
    'promise/valid-params': 'error',

    'import/no-unresolved': 'off',
    'import/named': 'error',
    'import/default': 'error',
    'import/namespace': 'error',
    'import/no-restricted-paths': 'off',
    'import/no-absolute-path': 'error',
    'import/no-dynamic-require': 'off',
    'import/no-internal-modules': 'off',
    'import/no-webpack-loader-syntax': 'off',
    'import/no-self-import': 'error',
    'import/no-cycle': 'error',
    'import/no-useless-path-segments': 'error',
    'import/no-relative-parent-imports': 'off',
    'import/export': 'error',
    'import/no-named-as-default': 'error',
    'import/no-named-as-default-member': 'error',
    'import/no-deprecated': 'off',
    'import/no-extraneous-dependencies': 'off',
    'import/no-mutable-exports': 'error',
    'import/unambiguous': 'off',
    'import/no-commonjs': 'off',
    'import/no-amd': 'error',
    'import/no-nodejs-modules': 'off',
    'import/first': 'error',
    'import/exports-last': 'off',
    'import/no-duplicates': 'error',
    'import/no-namespace': 'off',
    'import/extensions': 'off',
    'import/order': [
      'error', {
        'groups': [ 'builtin', 'external', 'internal', 'parent', 'sibling', 'index' ],
        'newlines-between': 'never'
      }
    ],
    'import/newline-after-import': [ 'error', { count: 1 }],
    'import/prefer-default-export': 'off',
    'import/max-dependencies': 'off',
    'import/no-unassigned-import': 'off',
    'import/no-named-default': 'off',
    'import/no-anonymous-default-export': 'off',
    'import/group-exports': 'off',
    'import/dynamic-import-chunkname': 'off',

    // es8 rules
    'no-async-promise-executor': 'error',
    'no-await-in-loop': 'error',
    'no-return-await': 'off',
    'require-await': 'off',
    'promise/prefer-await-to-then': 'off',
    'promise/prefer-await-to-callbacks': 'off',

    // es9 rules
    'prefer-named-capture-group': 'off',
    'prefer-object-spread': 'error'
  }
};
