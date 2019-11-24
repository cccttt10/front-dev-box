module.exports = {
    env: {
        browser: true,
        commonjs: true,
        es6: true,
        mocha: true,
        node: true
    },
    extends: ['eslint-config-airbnb-base', 'plugin:vue/essential'],
    parserOptions: {
        ecmaVersion: 2018,
        sourceType: 'module'
    },
    rules: {
        'array-bracket-spacing': 'off',
        'arrow-parens': 'off',
        'comma-dangle': 'off',
        'import/no-unresolved': 'off',
        'import/prefer-default-export': 'off',
        'indent': ['error', 4, {
            'SwitchCase': 1
        }],
        'object-curly-newline': 'off',
        'operator-linebreak': 'off',
        'prefer-destructuring': 'off',
        'quote-props': 'off'
    }
};
