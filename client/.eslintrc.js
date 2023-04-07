module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es2021: true
  },
  extends: ["plugin:react/recommended", "standard"],
  settings: {
    react: {
      version: "detect"
    }
  },
  overrides: [],
  parserOptions: {
    ecmaVersion: "latest"
  },
  plugins: ["react"],
  rules: {
    semi: [1, "always"],
    "no-trailing-spaces": "warn",
    "react/prop-types": "off",
    "no-tabs": "off",
    indent: ["warn", 2],
    "comma-dangle": "off",
    quotes: ["warn", "double"],
    "space-before-function-paren": ["warn", "always"]
  }
};
