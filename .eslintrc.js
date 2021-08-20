module.exports = {
  env: {
    browser: true,
    es6: true,
    commonjs: true,
    node: true,
  },
  extends: ["airbnb-base", "prettier"],
  globals: {
    Atomics: "readonly",
    SharedArrayBuffer: "readonly",
  },
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: "module",
  },
  rules: {
    "prettier/prettier": "error",
  },
  plugins: ["prettier"],
};
