module.exports = {
    extends: ['@commitlint/config-conventional'],
    rules: {
        'subject-case': [
            0,
            'never',
            []
        ],
        'body-max-line-length': [
            0,
            'never',
            0
        ],
        'header-max-length': [
            0,
            'never',
            0
        ],
        'type-enum': [
            2,
            'always',
            [
                'build',
                'chore',
                'ci',
                'deps',
                'docs',
                'feat',
                'fix',
                'perf',
                'refactor',
                'revert',
                'style',
                'test'
            ]
        ]
    }
};