module.exports = {
    env: {
        "browser": true,
        "commonjs": true,
        "es6": true,
        "jquery": true,
    },
    extends: [
        "airbnb-base",
        "plugin:vue/essential",
    ],
    rules: {
        "brace-style": ["error", "stroustrup"],
        "indent": [
            "error",
            4,
            {
                "SwitchCase": 1
            }
        ],
        "key-spacing": "off",
        "linebreak-style": "error",
        "max-len": [
            "error",
            {
                "code": 120
            }
        ],
        "no-multi-spaces": "off",
        "no-plusplus": [
            "error",
            {
                "allowForLoopAfterthoughts": true
            }
        ],
        "prefer-destructuring": "warn",
        "space-before-function-paren": ["error", "always"],

        "vue/html-closing-bracket-newline": [
            "error",
            {
                "multiline": "never"
            }
        ],
        "vue/no-unused-components": ["warn"],
        "vue/html-closing-bracket-spacing": "error",
        "vue/prop-name-casing": ["error"],
        "vue/require-prop-types": "error",
        "vue/v-bind-style": "error",
        "vue/v-on-style": "error",
        "vue/this-in-template": "error"
    },
    plugins: [
        'vue'
    ]
};
