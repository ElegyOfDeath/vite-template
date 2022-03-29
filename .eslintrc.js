module.exports = {
  root: true,
  env: {
    // 启用的环境
    browser: true,
    es2021: true,
    node: true,
  },
  parser: "vue-eslint-parser", // 增加 vue 解析器
  parserOptions: {
    parser: "@typescript-eslint/parser", // 解析器
    ecmaVersion: 2020, // es 版本
  },
  extends: [
    "plugin:vue/vue3-recommended", // vue 风格
    "plugin:@typescript-eslint/recommended", // ts 风格
    "plugin:prettier/recommended",
  ],
  plugins: ["vue", "@typescript-eslint"], // 插件包
  rules: {
    "@typescript-eslint/no-explicit-any": 0,
    "vue/multi-word-component-names": 0,
  },
};
