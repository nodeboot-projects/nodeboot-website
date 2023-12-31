"use strict";
const { defineConfig } = require("eslint-define-config");

const ruleset = {
  "accessor-pairs": ["error"],
  "array-bracket-newline": ["error"],
  "array-bracket-spacing": ["error"],
  "array-callback-return": ["error"],
  "array-element-newline": ["error"],
  "block-scoped-var": ["error"],
  "capitalized-comments": ["error"],
  "class-methods-use-this": ["error"],
  "comma-dangle": ["error"],
  complexity: ["error"],
  "consistent-return": ["error"],
  curly: ["error"],
  "default-case": ["error"],
  "dot-notation": ["error"],
  eqeqeq: ["error", "always", { null: "never" }],
  "func-style": ["error", "declaration", { allowArrowFunctions: true }],
  "function-paren-newline": ["error"],
  "guard-for-in": ["error"],
  "id-length": ["error"],
  "import/extensions": [
    "error",
    {
      cts: "always",
      js: "always",
      json: "always",
      jsx: "always",
      mjs: "always",
      mts: "always",
      ts: "always",
      tsx: "always",
    },
  ],
  "import/first": ["error"],
  "import/newline-after-import": ["error"],
  "import/no-duplicates": ["error"],
  "import/no-extraneous-dependencies": ["error"],
  "import/no-named-as-default": ["error"],
  "import/no-nodejs-modules": ["error"],
  "import/no-unresolved": ["error"],
  "import/order": ["error"],
  "import/prefer-default-export": ["error"],
  indent: [
    "error",
    2,
    {
      SwitchCase: 1,
    },
  ],
  "line-comment-position": ["error"],
  "linebreak-style": ["error", "unix"],
  "max-depth": ["error"],
  "max-len": [
    "error",
    {
      code: 80,
      comments: 80,
      ignoreComments: true,
      ignoreStrings: true,
      ignoreTemplateLiterals: true,
      ignoreUrls: true,
      tabWidth: 2,
    },
  ],
  "max-lines": ["error"],
  "max-lines-per-function": ["error"],
  "max-statements": ["error"],
  "multiline-comment-style": ["error"],
  "n/no-deprecated-api": ["error"],
  "n/no-extraneous-import": [
    "error",
    {
      allowModules: [
        // eslint-disable-next-line sonarjs/no-duplicate-string
        "eslint-define-config",
        "less",
        "sass",
        "unbuild",
        "vite",
        "vitest",
      ],
    },
  ],
  "n/no-extraneous-require": [
    "error",
    {
      allowModules: [
        "eslint-define-config",
        "less",
        "sass",
        "unbuild",
        "vite",
        "vitest",
      ],
    },
  ],
  "n/no-missing-import": ["off"],
  "n/no-missing-require": [
    "error",
    {
      allowModules: [
        "eslint-define-config",
        "less",
        "pnpapi",
        "sass",
        "unbuild",
        "vite",
        "vitest",
      ],
      tryExtensions: [".ts", ".js", ".jsx", ".tsx", ".d.ts"],
    },
  ],
  "n/no-process-exit": "error",
  "n/no-unpublished-import": "error",
  "n/no-unpublished-require": "error",
  "n/no-unsupported-features/es-builtins": ["error"],
  "n/no-unsupported-features/es-syntax": "error",
  "n/no-unsupported-features/node-builtins": ["error"],
  "new-cap": ["error"],
  "no-alert": ["error"],
  "no-caller": ["error"],
  "no-console": [
    "error",
    {
      allow: ["count", "debug", "error", "trace"],
    },
  ],
  "no-constant-condition": ["error"],
  "no-continue": ["error"],
  "no-debugger": ["error"],
  "no-div-regex": ["error"],
  "no-duplicate-imports": [
    "error",
    {
      includeExports: true,
    },
  ],
  "no-else-return": ["error"],
  "no-empty": ["warn", { allowEmptyCatch: true }],
  "no-empty-function": ["error"],
  "no-empty-pattern": ["error"],
  "no-eq-null": ["error"],
  "no-eval": ["error"],
  "no-extend-native": ["error"],
  "no-extra-bind": ["error"],
  "no-extra-label": ["error"],
  "no-extra-semi": ["error"],
  "no-floating-decimal": ["error"],
  "no-global-assign": ["error"],
  "no-implicit-coercion": ["error"],
  "no-implicit-globals": ["error"],
  "no-implied-eval": ["error"],
  "no-inline-comments": ["error"],
  "no-invalid-this": ["error"],
  "no-iterator": ["error"],
  "no-labels": ["error"],
  "no-lone-blocks": ["error"],
  "no-lonely-if": ["error"],
  "no-loop-func": ["error"],
  "no-magic-numbers": ["error"],
  "no-multi-spaces": ["error"],
  "no-multi-str": ["error"],
  "no-new": ["error"],
  "no-new-func": ["error"],
  "no-new-wrappers": ["error"],
  "no-octal-escape": ["error"],
  "no-param-reassign": ["error"],
  "no-plusplus": ["error"],
  "no-process-exit": "error",
  "no-proto": ["error"],
  "no-return-assign": ["error"],
  "no-return-await": ["error"],
  "no-script-url": ["error"],
  "no-self-compare": ["error"],
  "no-sequences": ["error"],
  "no-shadow": ["error"],
  "no-template-curly-in-string": ["error"],
  "no-ternary": ["error"],
  "no-undef": ["error"],
  "no-undef-init": ["error"],
  "no-undefined": ["error"],
  "no-underscore-dangle": [
    "off",
    {
      allow: ["_id", "_package"],
      allowAfterSuper: true,
      allowAfterThis: true,
      allowAfterThisConstructor: true,
      allowFunctionParams: true,
      allowInArrayDestructuring: true,
      allowInObjectDestructuring: true,
      enforceInClassFields: false,
      enforceInMethodNames: false,
    },
  ],
  "no-unused-expressions": ["error"],
  "no-unused-vars": ["error"],
  "no-useless-concat": ["error"],
  "no-useless-constructor": ["error"],
  "no-useless-escape": ["error"],
  "no-warning-comments": ["error"],
  "object-curly-newline": ["error"],
  "object-curly-spacing": ["error"],
  "object-property-newline": ["error"],
  "one-var": ["error"],
  "padded-blocks": ["error"],
  "prefer-const": [
    "warn",
    {
      destructuring: "all",
    },
  ],
  "prettier/prettier": [
    "error",
    {
      arrowParens: "always",
      bracketSameLine: true,
      bracketSpacing: true,
      endOfLine: "lf",
      htmlWhitespaceSensitivity: "strict",
      jsxSingleQuote: false,
      printWidth: 80,
      proseWrap: "always",
      quoteProps: "as-needed",
      semi: true,
      singleAttributePerLine: false,
      singleQuote: false,
      tabWidth: 2,
      trailingComma: "es5",
      useTabs: false,
    },
  ],
  "quote-props": ["error", "as-needed"],
  quotes: ["error", "double"],
  radix: ["error"],
  "regexp/no-contradiction-with-assertion": "error",
  "regexp/use-ignore-case": ["error"],
  semi: ["error", "always"],
  "simple-import-sort/exports": ["error"],
  "simple-import-sort/imports": ["error"],
  "sonarjs/cognitive-complexity": ["error"],
  "sonarjs/no-duplicate-string": [
    "error",
    {
      threshold: 2,
    },
  ],
  "sonarjs/no-empty-collection": ["error"],
  "sonarjs/no-redundant-jump": ["error"],
  "sonarjs/prefer-immediate-return": ["error"],
  "sort-imports": [
    "error",
    {
      allowSeparatedGroups: true,
      ignoreCase: false,
      ignoreDeclarationSort: true,
      ignoreMemberSort: false,
      memberSyntaxSortOrder: ["none", "all", "multiple", "single"],
    },
  ],
  "sort-keys": ["error"],
  "sort-keys/sort-keys-fix": ["error"],
  "spaced-comment": ["error"],
  strict: ["error"],
  "unicorn/consistent-function-scoping": ["error"],
  "unicorn/error-message": ["error"],
  "unicorn/filename-case": ["error"],
  "unicorn/no-abusive-eslint-disable": ["error"],
  "unicorn/no-array-reduce": ["error"],
  "unicorn/no-empty-file": ["error"],
  "unicorn/no-keyword-prefix": ["error"],
  "unicorn/no-negated-condition": ["error"],
  "unicorn/no-null": ["error"],
  "unicorn/no-useless-undefined": ["error"],
  "unicorn/prefer-at": ["error"],
  "unicorn/prefer-dom-node-dataset": ["error"],
  "unicorn/prefer-event-target": ["error"],
  "unicorn/prefer-number-properties": ["error"],
  "unicorn/prefer-query-selector": ["error"],
  "unicorn/prefer-spread": ["error"],
  "unicorn/prefer-switch": ["error"],
  "unicorn/prefer-ternary": ["error"],
  "unicorn/prefer-top-level-await": ["error"],
  "unicorn/prevent-abbreviations": ["error"],
  "unicorn/switch-case-braces": ["error"],
};

// Creates an eslint config object
const eslintConfigObject = defineConfig({
  overrides: [
    {
      env: {
        es2020: true,
        node: true,
      },
      extends: [
        "eslint:all",
        "plugin:import/errors",
        "plugin:import/warnings",
        "plugin:n/recommended",
        "plugin:regexp/recommended",
        "plugin:sonarjs/recommended",
        "plugin:unicorn/all",
      ],
      files: ["*.cjs"],
      parserOptions: {
        createDefaultProgram: false,
        ecmaVersion: "latest",
        parser: "@babel/eslint-parser",
        project: ["./jsconfig.json"],
        sourceType: "script",
      },
      plugins: [
        "import",
        "regexp",
        "simple-import-sort",
        "sonarjs",
        "sort-keys",
        "prettier",
      ],
      rules: {
        ...ruleset,
        "array-bracket-newline": ["off"],
        "array-element-newline": ["off"],
        "comma-dangle": ["off"],
        "import/no-extraneous-dependencies": ["off"],
        "max-lines": ["off"],
        "no-magic-numbers": ["off"],
        "no-multi-spaces": ["off"],
        "no-warning-comments": [
          "error",
          {
            location: "start",
            terms: [],
          },
        ],
        "object-curly-newline": ["off"],
        "object-curly-spacing": ["off"],
        "one-var": ["off"],
        "sonarjs/no-duplicate-string": ["off"],
      },
    },
    // TypescriptReact
    {
      env: {
        browser: true,
        es2020: true,
        node: true,
      },
      extends: [
        "eslint:all",
        "plugin:@typescript-eslint/all",
        "plugin:@typescript-eslint/strict-type-checked",
        "plugin:@typescript-eslint/stylistic",
        "plugin:@typescript-eslint/stylistic-type-checked",
        "plugin:import/errors",
        "plugin:import/typescript",
        "plugin:import/warnings",
        "plugin:jsx-a11y/recommended",
        "plugin:n/recommended",
        "plugin:react-hooks/recommended",
        "plugin:react/all",
        "plugin:react/jsx-runtime",
        "plugin:regexp/recommended",
        "plugin:sonarjs/recommended",
        "plugin:unicorn/all",
      ],
      files: ["*.ts", "*.tsx"],
      parserOptions: {
        createDefaultProgram: false,
        ecmaVersion: "latest",
        parser: "@typescript-eslint/parser",
        project: ["./tsconfig.json", "./tsconfig.node.json"],
        sourceType: "module",
      },
      plugins: [
        "@typescript-eslint",
        "import",
        "jsx-a11y",
        "react",
        "react-hooks",
        "react-refresh",
        "regexp",
        "simple-import-sort",
        "sonarjs",
        "sort-keys",
        "prettier",
      ],
      rules: {
        ...ruleset,
        "@typescript-eslint/array-bracket-newline": ["off"],
        "@typescript-eslint/array-element-newline": ["off"],
        "@typescript-eslint/ban-ts-comment": ["off"],
        "@typescript-eslint/ban-types": ["off"],
        "@typescript-eslint/comma-dangle": ["off"],
        "@typescript-eslint/consistent-type-definitions": ["off"],
        "@typescript-eslint/consistent-type-imports": ["error"],
        "@typescript-eslint/explicit-function-return-type": ["off"],
        "@typescript-eslint/explicit-module-boundary-types": ["off"],
        // FIXME: Fix conflicting rules with prettier on embedded types (props)
        "@typescript-eslint/indent": [
          "off",
          2,
          {
            SwitchCase: 1,
          },
        ],
        "@typescript-eslint/lines-between-class-members": ["error"],
        "@typescript-eslint/naming-convention": ["off"],
        "@typescript-eslint/no-confusing-void-expression": ["off"],
        "@typescript-eslint/no-empty-function": ["off"],
        "@typescript-eslint/no-empty-interface": ["off"],
        "@typescript-eslint/no-explicit-any": ["error"],
        "@typescript-eslint/no-extraneous-class": ["error"],
        "@typescript-eslint/no-magic-numbers": ["off"],
        "@typescript-eslint/no-misused-promises": ["off"],
        "@typescript-eslint/no-shadow": ["off"],
        "@typescript-eslint/no-throw-literal": ["off"],
        "@typescript-eslint/no-type-alias": ["off"],
        "@typescript-eslint/no-unnecessary-boolean-literal-compare": ["off"],
        "@typescript-eslint/no-unnecessary-condition": ["off"],
        "@typescript-eslint/no-unsafe-argument": ["off"],
        "@typescript-eslint/no-unsafe-assignment": ["off"],
        "@typescript-eslint/no-unsafe-call": ["off"],
        "@typescript-eslint/no-unsafe-member-access": ["off"],
        "@typescript-eslint/no-unsafe-return ": ["off"],
        "@typescript-eslint/no-unused-vars": ["off"],
        "@typescript-eslint/no-useless-constructor": ["error"],
        "@typescript-eslint/non-nullable-type-assertion-style": ["off"],
        "@typescript-eslint/object-curly-spacing": ["off"],
        "@typescript-eslint/prefer-enum-initializers": ["off"],
        "@typescript-eslint/prefer-for-of": ["error"],
        "@typescript-eslint/prefer-readonly-parameter-types": ["off"],
        "@typescript-eslint/require-await": ["off"],
        "@typescript-eslint/restrict-template-expressions": ["off"],
        "accessor-pairs": ["error"],
        "array-bracket-newline": ["off"],
        "array-callback-return": ["error"],
        "array-element-newline": ["off"],
        "arrow-body-style": ["off"],
        "block-scoped-var": ["error"],
        "capitalized-comments": ["off"],
        "class-methods-use-this": ["error"],
        "comma-dangle": ["off"],
        complexity: ["off"],
        "consistent-return": ["off"],
        curly: ["off"],
        "default-case": ["error"],
        "dot-notation": ["error"],
        eqeqeq: ["error", "smart"],
        "func-style": ["off"],
        "function-paren-newline": ["off"],
        "guard-for-in": ["error"],
        "id-length": ["off"],
        "import/extensions": ["off"],
        "import/first": ["error"],
        "import/newline-after-import": ["error"],
        "import/no-duplicates": ["error"],
        "import/no-extraneous-dependencies": ["off"],
        "import/no-named-as-default": ["off"],
        "import/no-unresolved": ["error"],
        "import/order": ["off"],
        "import/prefer-default-export": ["off"],
        indent: [
          "error",
          2,
          {
            SwitchCase: 1,
          },
        ],
        "jsx-a11y/click-events-have-key-events": ["off"],
        "jsx-a11y/media-has-caption": ["off"],
        "jsx-a11y/no-noninteractive-element-interactions": ["off"],
        "line-comment-position": ["off"],
        "linebreak-style": ["error", "unix"],
        "max-depth": ["off"],
        "max-len": [
          "error",
          {
            code: 80,
            comments: 80,
            ignoreComments: true,
            ignoreStrings: true,
            ignoreTemplateLiterals: true,
            ignoreUrls: true,
            tabWidth: 2,
          },
        ],
        "max-lines": ["off"],
        "max-lines-per-function": ["off"],
        "max-statements": ["off"],
        "multiline-comment-style": ["off"],
        "new-cap": ["off"],
        "no-alert": ["error"],
        "no-caller": ["error"],
        "no-console": [
          "error",
          {
            allow: ["count", "debug", "error", "trace"],
          },
        ],
        "no-constant-condition": ["off"],
        "no-continue": ["error"],
        "no-debugger": ["error"],
        "no-div-regex": ["error"],
        "no-duplicate-imports": ["off"],
        "no-else-return": ["error"],
        "no-empty-function": ["off"],
        "no-empty-pattern": ["off"],
        "no-eq-null": ["off"],
        "no-eval": ["error"],
        "no-extend-native": ["error"],
        "no-extra-bind": ["error"],
        "no-extra-label": ["error"],
        "no-floating-decimal": ["error"],
        "no-global-assign": ["error"],
        "no-implicit-coercion": ["error"],
        "no-implicit-globals": ["error"],
        "no-implied-eval": ["error"],
        "no-inline-comments": ["off"],
        "no-invalid-this": ["error"],
        "no-iterator": ["error"],
        "no-labels": ["error"],
        "no-lone-blocks": ["error"],
        "no-lonely-if": ["error"],
        "no-loop-func": ["error"],
        "no-magic-numbers": ["off"],
        "no-multi-spaces": ["off"],
        "no-multi-str": ["error"],
        "no-new": ["error"],
        "no-new-func": ["error"],
        "no-new-wrappers": ["error"],
        "no-octal-escape": ["error"],
        "no-param-reassign": ["error"],
        "no-plusplus": ["error"],
        "no-proto": ["error"],
        "no-return-assign": ["error"],
        "no-return-await": ["error"],
        "no-script-url": ["error"],
        "no-self-compare": ["error"],
        "no-sequences": ["error"],
        "no-shadow": ["off"],
        "no-template-curly-in-string": ["error"],
        "no-ternary": ["off"],
        "no-undefined": ["off"],
        "no-underscore-dangle": ["off"],
        "no-unused-expressions": ["error"],
        "no-unused-vars": ["off"],
        "no-useless-concat": ["off"],
        "no-useless-constructor": ["error"],
        "no-warning-comments": [
          "error",
          {
            location: "start",
            terms: [],
          },
        ],
        "object-curly-newline": ["off"],
        "object-curly-spacing": ["off"],
        "one-var": ["off"],
        "padded-blocks": [
          "error",
          {
            blocks: "never",
            classes: "always",
            switches: "always",
          },
        ],
        "prefer-const": ["error"],
        "prettier/prettier": [
          "error",
          {
            arrowParens: "always",
            bracketSameLine: true,
            bracketSpacing: true,
            endOfLine: "lf",
            htmlWhitespaceSensitivity: "strict",
            jsxSingleQuote: false,
            printWidth: 80,
            proseWrap: "always",
            quoteProps: "as-needed",
            semi: true,
            singleAttributePerLine: false,
            singleQuote: false,
            tabWidth: 2,
            trailingComma: "es5",
            useTabs: false,
          },
        ],
        quotes: ["error", "double"],
        radix: ["error"],
        "react-hooks/exhaustive-deps": ["error"],
        "react-hooks/rules-of-hooks": ["error"],
        // Note
        "react-refresh/only-export-components": "warn",
        "react/button-has-type": ["error"],
        "react/display-name": ["error"],
        "react/forbid-component-props": ["off"],
        "react/function-component-definition": [
          "error",
          {
            namedComponents: "arrow-function",
            unnamedComponents: "arrow-function",
          },
        ],
        "react/jsx-closing-tag-location": ["off"],
        "react/jsx-curly-brace-presence": [
          "error",
          {
            children: "never",
            props: "never",
          },
        ],
        "react/jsx-filename-extension": [
          "error",
          {
            extensions: [".jsx", ".tsx"],
          },
        ],
        "react/jsx-fragments": ["error", "syntax"],
        "react/jsx-indent": ["error", 2],
        "react/jsx-key": ["off"],
        "react/jsx-max-depth": [
          "error",
          {
            max: 5,
          },
        ],
        "react/jsx-no-bind": ["off"],
        "react/jsx-no-duplicate-props": ["error"],
        "react/jsx-no-literals": ["off"],
        "react/jsx-no-undef": ["error"],
        "react/jsx-no-useless-fragment": ["error"],
        "react/jsx-one-expression-per-line": ["off"],
        "react/jsx-props-no-multi-spaces": ["error"],
        "react/jsx-props-no-spreading": ["error"],
        "react/jsx-sort-props": [
          "error",
          {
            callbacksLast: true,
            ignoreCase: true,
            shorthandFirst: true,
          },
        ],
        "react/jsx-tag-spacing": [
          "error",
          {
            beforeSelfClosing: "always",
          },
        ],
        "react/jsx-uses-react": ["error"],
        "react/no-array-index-key": ["off"],
        "react/no-children-prop": ["error"],
        "react/no-danger-with-children": ["error"],
        "react/no-direct-mutation-state": ["error"],
        "react/no-this-in-sfc": ["error"],
        "react/no-unescaped-entities": ["error"],
        "react/prop-types": ["off"],
        "react/react-in-jsx-scope": ["off"],
        "react/require-default-props": ["off"],
        "react/self-closing-comp": ["off"],
        "react/void-dom-elements-no-children": ["error"],
        semi: ["error", "always"],
        "simple-import-sort/exports": ["error"],
        "simple-import-sort/imports": ["error"],
        "sonarjs/cognitive-complexity": ["off"],
        "sonarjs/no-duplicate-string": [
          "error",
          {
            threshold: 2,
          },
        ],
        "sonarjs/no-empty-collection": ["error"],
        "sonarjs/no-redundant-jump": ["error"],
        "sonarjs/prefer-immediate-return": ["error"],
        "sort-imports": ["off"],
        "spaced-comment": ["off"],
        strict: ["error"],
        "unicorn/consistent-function-scoping": ["off"],
        "unicorn/error-message": ["off"],
        "unicorn/filename-case": ["off"],
        "unicorn/no-abusive-eslint-disable": ["off"],
        "unicorn/no-array-reduce": ["error"],
        "unicorn/no-empty-file": ["off"],
        "unicorn/no-keyword-prefix": ["off"],
        "unicorn/no-negated-condition": ["error"],
        "unicorn/no-null": ["off"],
        "unicorn/no-useless-undefined": ["off"],
        "unicorn/prefer-at": ["error"],
        "unicorn/prefer-dom-node-dataset": ["error"],
        "unicorn/prefer-event-target": ["error"],
        "unicorn/prefer-number-properties": ["error"],
        "unicorn/prefer-query-selector": ["off"],
        "unicorn/prefer-spread": ["error"],
        "unicorn/prefer-ternary": ["error"],
        "unicorn/prefer-top-level-await": ["error"],
        "unicorn/prevent-abbreviations": ["off"],
      },
    },
  ],
});

// Eslint takes control from here
module.exports = eslintConfigObject;
