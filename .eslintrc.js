module.exports = {
    "parser": "babel-eslint",
    "env": {
        "es6": true,
        "browser": true
    },
    "settings": {
        "ecmascript": 6,
        "jsx": true
    },
    "extends": "eslint:recommended",
    "globals": {
        "Atomics": "readonly",
        "SharedArrayBuffer": "readonly"
    },
    "parserOptions": {
        "ecmaFeatures": {
            "experimentalObjectRestSpread": true,
            "experimentalDecorators": true,
            "jsx": true
        },
        "ecmaVersion": 2018,
        "sourceType": "module"
    },
    "plugins": [
        "react"
    ],
    "rules": {
        "no-console": 0,
        "no-unused-vars": 0
    }
};
