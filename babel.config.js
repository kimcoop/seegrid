module.exports = {
    presets: ['@babel/preset-env'],
    only: ['./src'],
    plugins: [
        '@babel/plugin-proposal-export-default-from',
        '@babel/plugin-proposal-optional-chaining',
        [
            'module-resolver',
            {
                root: ['./src'],
            },
        ],
    ],
}
