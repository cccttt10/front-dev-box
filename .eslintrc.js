module.exports = {
    env: {
        browser: true,
        commonjs: true,
        node: true,
        es6: true,
        mocha: true
    },
    extends: ['eslint-config-airbnb-base', 'plugin:vue/essential'],
    parserOptions: {
        ecmaVersion: 2018,
        sourceType: 'module'
    },
    rules: {
        'import/no-unresolved': 'off',
        'indent': ['error', 4, { 'SwitchCase': 1 }],
        'array-bracket-spacing': 'off',
        'comma-dangle': 'off',
        'import/prefer-default-export': 'off',
        'arrow-parens': 'off'
    }
};
