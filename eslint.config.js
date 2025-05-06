import js from "@eslint/js";
import globals from "globals";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import tseslint from "typescript-eslint";

export default tseslint.config(
  { ignores: ["dist"] },
  {
    extends: [js.configs.recommended, ...tseslint.configs.recommended],
    files: ["**/*.{ts,tsx}"],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
    plugins: {
      "react-hooks": reactHooks,
      "react-refresh": reactRefresh,
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
      "react-refresh/only-export-components": [
        "warn",
        { allowConstantExport: true },
      ],
    },
  }
);

// import airbnbConfig from 'eslint-config-airbnb'

// import siberiacancodePlugin from './lib/index.js'
// import siberiacancodeConfigRecommended from './lib/configs/recommended.js'

// /** @type {import('eslint').Linter.Config} * */
// export default [
//   {
//     name: 'globals',
//     ignores: ['dist', 'lib', '.eslintrc.js']
//   },
//   {
//     name: 'airbnbn',
//     rules: airbnbConfig.rules
//   },
//   {
//     files: ['index.js'],
//     name: 'sibericancode',
//     plugins: {
//       'siberiacancode': siberiacancodePlugin
//     },
//     rules: {
//       ...siberiacancodeConfigRecommended.rules,
//       'siberiacancode/ban-words': ['error', { list: ['element'] }]
//     }
//   },
//   {
//     name: 'rewrite',
//     rules: {
//       'no-console': 'warn'
//     },
//   }
// ]
