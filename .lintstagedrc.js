module.exports = {
    './**/*.{js}': [
        'prettier --config ./.prettierrc.json --write',
        'eslint --fix',
        'git add'
    ],
    './**/*.{vue}': [
        'prettier --config ./.prettierrc.json --write',
        'eslint --fix',
        'stylelint --fix',
        'git add'
    ]
};
