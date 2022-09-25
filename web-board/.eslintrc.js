module.exports = {
  root: true,
  env: {
    node: true,
  },
  ignorePatterns: ['src/assets/**', '**/node_modules/**', 'translations/language-pack/**', 'public/lottie.js'],
  extends: [
    "plugin:vue/essential",
    "eslint:recommended",
    "@vue/typescript/recommended",
    "plugin:prettier/recommended",
  ],
  parserOptions: {
    ecmaVersion: 2020,
  },
  plugins: ["vuetify"],
  rules: {
    "no-console": process.env.NODE_ENV === "production" ? "warn" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off",
    "prettier/prettier": "warn",
    "vue/multi-word-component-names": 0,
  },
};

