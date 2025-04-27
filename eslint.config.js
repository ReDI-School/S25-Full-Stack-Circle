import js from "@eslint/js";
import globals from "globals";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import eslintConfigPrettier from "eslint-config-prettier";
import prettier from "eslint-plugin-prettier";
import importPlugin from "eslint-plugin-import";
import reactPlugin from "eslint-plugin-react";

export default [
  { ignores: ["**/dist", "**/node_modules", ".github"] },

  // Shared base configuration
  {
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module"
    },
    plugins: {
      prettier
    },
    rules: {
      ...js.configs.recommended.rules,
      ...eslintConfigPrettier.rules,
      "prettier/prettier": [
        "error",
        {
          singleQuote: false,
          trailingComma: "none"
        }
      ],
      "no-undef": "error",
      "no-unused-vars": ["warn", { argsIgnorePattern: "^_" }],
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
      "no-var": "error",
      eqeqeq: ["error", "always"],
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
      ]
    }
  },

  // Frontend specific configuration
  {
    files: ["frontend/**/*.{js,jsx}"],
    languageOptions: {
      globals: globals.browser,
      parserOptions: {
        ecmaFeatures: { jsx: true }
      }
    },
    plugins: {
      "react-hooks": reactHooks,
      "react-refresh": reactRefresh,
      import: importPlugin,
      react: reactPlugin
    },
    settings: {
      "import/resolver": {
        node: {
          extensions: [".js", ".jsx"],
          moduleDirectory: ["node_modules", "src"]
        }
      },
      react: {
        version: "detect"
      }
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
      "react/jsx-uses-react": "error",
      "react/jsx-uses-vars": "error",
      "react/jsx-no-undef": "error",
      "react-refresh/only-export-components": [
        "warn",
        {
          allowConstantExport: true
        }
      ],
      "react-hooks/exhaustive-deps": "warn",
      "import/no-unresolved": [
        "error",
        {
          commonjs: true,
          caseSensitive: true
        }
      ],
      "import/no-duplicates": "error",
      "react/prop-types": "off",
      "react/react-in-jsx-scope": "off",
      "react/jsx-filename-extension": [1, { extensions: [".js", ".jsx"] }]
    }
  },

  // Backend specific configuration
  {
    files: ["backend/**/*.js"],
    languageOptions: {
      globals: globals.node
    },
    rules: {
      "no-process-env": "off",
      "no-sync": "warn",
      "require-await": "error",
      "no-console": ["warn", { allow: ["warn", "error", "info"] }],
      "no-unused-vars": ["error", { argsIgnorePattern: "^_" }]
    }
  }
];
