import js from "@eslint/js";
import pluginN from "eslint-plugin-n";
import pluginImport from "eslint-plugin-import";
import pluginPromise from "eslint-plugin-promise";
import pluginUnicorn from "eslint-plugin-unicorn";
import globals from "globals";

export default [
  js.configs.recommended,
  pluginN.configs["flat/recommended-module"],
  pluginImport.flatConfigs.recommended,
  pluginPromise.configs["flat/recommended"],
  pluginUnicorn.configs["flat/recommended"],
  {
    languageOptions: {
      ecmaVersion: 2022,
      sourceType: "module",
      globals: { ...globals.browser, ...globals.node },
    },
    rules: {
      "no-restricted-syntax": ["error", "ForInStatement"],
      "no-unused-vars": ["error", { argsIgnorePattern: "^_" }],
    },
  },
];
