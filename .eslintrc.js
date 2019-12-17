module.exports = {
    extends: ['airbnb-base', 'prettier'],
    parser: 'babel-eslint',
    parserOptions: { ecmaVersion: 6 },
    plugins: ['prettier'],
    rules: {
        'prettier/prettier': ['error'],
    },
    root: true,
    env: {
        browser: true,
        node: true,
        jest: true,
    },
    settings: {
        'import/resolver': {
            node: {
                paths: ['./src'],
            },
        },
    },
}
