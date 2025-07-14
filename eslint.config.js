import js from "@eslint/js";
import eslintReact from "eslint-plugin-react";
import globals from "globals";
import typeLint from "typescript-eslint";
import eslintReactHooks from "eslint-plugin-react-hooks";
import eslintReactRefresh from "eslint-plugin-react-refresh";
import eslintConfigPrettier from "eslint-config-prettier";
import prettierPlugin from "eslint-plugin-prettier";

export default typeLint.config(
  {
    plugins: {
      "@typescript-eslint": typeLint.plugin,
      react: eslintReact,
      "react-hooks": eslintReactHooks,
      "react-refresh": eslintReactRefresh,
      prettier: prettierPlugin,
    },
  },
  {
    ignores: ["node_modules", "dist", ".react-router"],
  },
  js.configs.recommended,
  ...typeLint.configs.recommended,
  {
    languageOptions: {
      globals: {
        ...globals.node,
        ...globals.browser,
        ...globals.es2022,
      },
      parserOptions: {
        project: ["tsconfig.json"],
      },
    },
  },
  {
    files: ["**/*.{ts,tsx,js,jsx}"],
    rules: {
      ...eslintConfigPrettier.rules,
      "react/jsx-no-target-blank": "off",
      "react/prop-types": "off",
      "react/react-in-jsx-scope": "off",
      "no-var": "error",
      "prefer-const": "error",
      "no-undef": "error",
      "no-unused-vars": "error",
      "padding-line-between-statements": [
        "error",
        { blankLine: "always", prev: "import", next: "*" },
        { blankLine: "any", prev: "import", next: "import" },
        { blankLine: "always", prev: "*", next: "return" },
      ],
      "no-console": "warn",
      "func-style": ["error", "expression"],
      "prefer-arrow-callback": ["error", { allowNamedFunctions: false }],
      "prettier/prettier": "error",
      "linebreak-style": "off",
    },
  }
);
