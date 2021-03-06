module.exports = {
    "env": {
        "browser": true,
        "jest": true,
        "es6": true
    },
    "plugins": ["import", "jsx-a11y"],
    "extends": ['react-app', 'plugin:jsx-a11y/recommended', 'eslint:recommended'],
    "parserOptions": {
        "ecmaVersion": 2018,
        "sourceType": "module"
    },
    "rules": {
        "no-console": "warn",
        "no-eval": "error",
        "import/first": "error"
    }
};