import js from "@eslint/js";
import node from "eslint-plugin-node";
import security from "eslint-plugin-security";
import importPlugin from "eslint-plugin-import";
import unicorn from "eslint-plugin-unicorn";
import promise from "eslint-plugin-promise";
import prettier from "eslint-config-prettier";

export default [
  {
    languageOptions: {
      ecmaVersion: 2022,
      sourceType: "module",
      globals: {
        ...js.environments.browser.globals,
        ...js.environments.node.globals,
        ...js.environments.es2021.globals,
      },
    },
    plugins: {
      node,
      security,
      import: importPlugin,
      unicorn,
      promise,
    },
    extends: [
      js.configs.recommended,
      node.configs.recommended,
      security.configs.recommended,
      importPlugin.configs.recommended,
      unicorn.configs.recommended,
      promise.configs.recommended,
      prettier,
    ],
    rules: {
      "no-restricted-syntax": ["error", "ForInStatement"],
      "no-unused-vars": [
        "error",
        {
          argsIgnorePattern: "^_",
        },
      ],
    },
  },
];
