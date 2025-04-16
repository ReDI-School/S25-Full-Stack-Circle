import js from "@eslint/js";
import globals from "globals";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import eslintConfigPrettier from "eslint-config-prettier";
import prettier from "eslint-plugin-prettier";
import importPlugin from "eslint-plugin-import";
import reactPlugin from "eslint-plugin-react";

export default [
  { ignores: ["dist", "node_modules", ".github"] },
  {
    files: ["**/*.{js,jsx}"],
    languageOptions: {
      globals: globals.browser,
      parserOptions: {
        ecmaVersion: "latest",
        ecmaFeatures: { jsx: true },
        sourceType: "module"
      }
    },
    plugins: {
      "react-hooks": reactHooks,
      "react-refresh": reactRefresh,
      prettier: prettier,
      import: importPlugin,
      react: reactPlugin
    },
    settings: {
      "import/resolver": {
        node: {
          extensions: [".js", ".jsx"]
        }
      },
      react: {
        version: "detect"
      }
    },
    rules: {
      ...js.configs.recommended.rules,
      ...reactHooks.configs.recommended.rules,
      ...eslintConfigPrettier.rules,
      "prettier/prettier": [
        "error",
        {
          singleQuote: false,
          trailingComma: "none"
        }
      ],
      "react/jsx-uses-react": "error",
      "react/jsx-uses-vars": "error",
      "no-undef": "error",
      "react/jsx-no-undef": "error",
      "no-unused-vars": [
        "error",
        {
          varsIgnorePattern: "^[A-Z_]",
          argsIgnorePattern: "^_"
        }
      ],
      camelcase: ["error", { properties: "never" }],
      "arrow-body-style": [
        "error",
        "as-needed",
        {
          requireReturnForObjectLiteral: true
        }
      ],
      "no-console": ["warn", { allow: ["warn", "error"] }],
      "prefer-const": "error",
      eqeqeq: ["error", "always"],
      "react-refresh/only-export-components": [
        "warn",
        {
          allowConstantExport: true
        }
      ],
      "react-hooks/exhaustive-deps": "warn",
      "max-len": [
        "error",
        {
          code: 100,
          ignoreComments: true,
          ignoreStrings: true,
          ignoreTemplateLiterals: true
        }
      ],
      "spaced-comment": ["error", "always"],
      "no-multiple-empty-lines": [
        "error",
        {
          max: 2,
          maxEOF: 1
        }
      ],
      quotes: ["error", "double"],
      "no-magic-numbers": [
        "warn",
        {
          ignore: [-1, 0, 1, 2],
          enforceConst: true
        }
      ],
      "require-await": "error",
      "import/no-unresolved": ["error", { commonjs: true, caseSensitive: true }]
    }
  }
];
