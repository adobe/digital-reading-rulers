module.exports = {
    env: {
        "browser": true,
        "es2021": true
    },
    extends: [
        "eslint:recommended",
        "plugin:react/recommended",
        "plugin:@typescript-eslint/recommended"
    ],
    overrides: [
    ],
    parser: "@typescript-eslint/parser",
    parserOptions: {
        "ecmaVersion": "latest",
        "sourceType": "module"
    },
    plugins: [
        "react",
        "@typescript-eslint",
        "prettier"
    ],
    rules: {
      "semi": ["error", "always"],
      "quotes": ["error", "single"],
      // suppress errors for missing 'import React' in files
      "react/react-in-jsx-scope": "off",
      // allow jsx syntax in js files (for next.js project)
      "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }], //should add ".ts" if typescript project
    }
}
