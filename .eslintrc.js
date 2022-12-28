module.exports = {
  env: {
    browser: true,
    es2021: true,
    jest: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:@typescript-eslint/recommended",
  ],
  settings: {
    react: {
      pragma: "React",
      version: "detect",
    },
  },
  overrides: [
  ],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module"
  },
  plugins: [
    "react", "@typescript-eslint", "flowtype", "import"
  ],
  parser: "@typescript-eslint/parser",
  rules: {
    "array-bracket-spacing": ["error", "never"],
    "arrow-spacing": "error",
    "block-spacing": ["error", "always"],
    "brace-style": "error",
    "camelcase": "error",
    "comma-dangle": ["error", "never"],
    "comma-spacing": ["error", { "before": false, "after": true }],
    "comma-style": ["error", "last"],
    "computed-property-spacing": ["error", "never"],
    "eol-last": ["error", "always"],
    "func-call-spacing": ["error", "never"],
    "indent": ["error", 4],
    "jsx-quotes": ["error", "prefer-double"],
    "key-spacing": ["error", { "beforeColon": false }],
    "keyword-spacing": ["error", { "after": true }],
    "max-len": ["error", {"code": 120}],
    "multiline-ternary": ["error", "always-multiline"],
    "no-console": "warn",
    "no-return-assign": ["error", "always"],
    "no-var": "error",
    "no-multi-spaces": "error",
    "no-multiple-empty-lines": ["error", { "max": 1, "maxEOF": 0, "maxBOF": 0 }],
    "no-trailing-spaces": "error",
    "no-unused-vars": "off",
    "@typescript-eslint/no-unused-vars": ["warn"],
    "object-curly-spacing": ["error", "always"],
    "padded-blocks": ["error", "never"],
    "padding-line-between-statements": [
      "error",
      { blankLine: "always", prev: "*", next: "return" },
      { blankLine: "always", prev: ["const", "let", "var"], next: "*" },
      { blankLine: "any",    prev: ["const", "let", "var"], next: ["const", "let", "var"]}
    ],
    "prefer-const": "error",
    "prefer-template": "error",
    "quotes": ["error", "single"],
    "rest-spread-spacing": ["error", "never"],
    "semi": ["error", "never", { "beforeStatementContinuationChars": "never" }],
    "space-in-parens": ["error", "never"],
    "space-infix-ops": "error",
    "space-unary-ops": "error",
    "sort-imports": ["error", { "ignoreDeclarationSort": true }],
    "flowtype/space-after-type-colon": ["error", "always"],
    "import/order": ["warn", {
      "groups": [["builtin", "unknown", "external"], "internal", "parent", "sibling", "index", "object"],
      "newlines-between": "always",
      "pathGroups": [
        {
          "pattern": "react*",
          "group": "builtin",
          "position": "before"
        },
        {
          "pattern": "*",
          "group": "unknown",
          "position": "after",
        },
        {
          "pattern": "img/**",
          "group": "internal",
        },
        {
          "pattern": "hooks/**",
          "group": "internal",
        },
        {
          "pattern": "interface/**",
          "group": "internal",
        },
        {
          "pattern": "store/**",
          "group": "internal",
        },
        {
          "pattern": "utils/**",
          "group": "internal",
        },
        {
          "pattern": "components/**",
          "group": "internal",
          "position": "after"
        },
        {
          "pattern": "*.scss",
          "group": "index",
          "patternOptions": { matchBase: true },
          "position": "after"
        }
      ],
      "pathGroupsExcludedImportTypes": [],
      "alphabetize": {
        "order": "asc",
        "caseInsensitive": true
      }
    }],
    "import/newline-after-import": ["error", { "count": 1 }]
  }
}
