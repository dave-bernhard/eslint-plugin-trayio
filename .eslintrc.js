'use strict';

module.exports = {
    root: true,
    parser: '@typescript-eslint/parser',
    extends: [
        'eslint:recommended',
        'plugin:@typescript-eslint/eslint-recommended',
        'plugin:@typescript-eslint/recommended'
    ],
    env: {
        node: true
    },
    overrides: [
        {
            files: ['tests/**/*.js'],
            env: { mocha: true }
        }
    ]
};
