module.exports = {
    extends: [
        'eslint:recommended',
        'plugin:react/recommended',
        'plugin:@typescript-eslint/recommended',
        'prettier/@typescript-eslint',
        'plugin:prettier/recommended',
    ],
    plugins: [
        'react',
        'jsx-a11y',
        '@typescript-eslint',
        'prettier',
        'react-hooks',
    ],
    overrides: [
        {
            files: ['**/*.tsx'],
            rules: {
                'react/prop-types': 'off',
            },
        },
    ],
    rules: {
        semi: ['error', 'never'], // http://eslint.org/docs/rules/semi#always
        indent: ['error', 4, { SwitchCase: 1 }], // 2 spaces
        'linebreak-style': 0,
        quotes: ['error', 'single', { avoidEscape: true }], // http://eslint.org/docs/rules/quotes#avoidescape
        'max-len': ['error', 150, { ignoreTrailingComments: true }],
        'default-case': 'off',
        'no-prototype-builtins': 'off',
        'no-throw-literal': 'off',
        'no-use-before-define': 'off',
        camelcase: 'off',
        'spaced-comment': 'off',
        'import/no-unresolved': 'off',
        'no-underscore-dangle': 'off',
        'comma-dangle': ['error', 'always-multiline'], // http://eslint.org/docs/rules/comma-dangle#always-multiline
        'space-before-function-paren': [
            'error',
            { anonymous: 'always', named: 'never' },
        ], // http://eslint.org/docs/rules/space-before-function-paren
        radix: ['error', 'always'], // http://eslint.org/docs/rules/radix#as-needed
        'arrow-parens': [0],
        'no-cond-assign': ['error', 'always'], // http://eslint.org/docs/rules/no-cond-assign
        'no-console': ['error', { allow: ['warn', 'error', 'log'] }],
        'prefer-template': 'off', // disable template concationation
        'class-methods-use-this': [0],
        'no-plusplus': ['error', { allowForLoopAfterthoughts: true }], // http://eslint.org/docs/rules/no-plusplus
        'no-confusing-arrow': 'off',
        'new-cap': 'off',
        'no-nested-ternary': 'off',
        'import/prefer-default-export': 'off',
        'react/sort-comp': 'off',
        'react/no-did-update-set-state': 'off',
        'react/no-find-dom-node': 'off',
        'no-unused-expressions': 'off',
        'react/jsx-one-expression-per-line': 'off',
        'react/jsx-indent': ['error', 4], // resets identation for jsx markup to 2 spaces
        'react/prefer-stateless-function': 'off',
        'react/jsx-filename-extension': 'off', // allows jsx markup in .js files
        '@typescript-eslint/explicit-function-return-type': 'off',
        'react-hooks/rules-of-hooks': 'error',
        'react-hooks/exhaustive-deps': 'warn',
        'jsx-a11y/no-static-element-interactions': 'off',
        'jsx-a11y/img-has-alt': 'off',
        '@typescript-eslint/no-unused-vars': 'error',
        '@typescript-eslint/no-explicit-any': 'off',
        'prettier/prettier': 'off',
        '@typescript-eslint/no-empty-function': 'off',
        '@typescript-eslint/no-non-null-assertion': 'off',
        '@typescript-eslint/ban-ts-ignore': 'off',
        '@typescript-eslint/no-empty-interface': 'warn',
        'react-hooks/exhaustive-deps': 'off',
        '@typescript-eslint/no-inferrable-types': 'off',
        'eol-last': ['error', 'always'],
        'no-trailing-spaces': 'error',
        'require-atomic-updates': 'off',
        'object-curly-spacing': ["error", "always"],
    },
    settings: {
        react: {
            pragma: 'React',
            version: 'detect',
        },
    },
    env: {
        node: true,
        browser: true,
        jest: true,
        es6: true,
    },
    parser: '@typescript-eslint/parser',
}
