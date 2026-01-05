import js from "@eslint/js";
import globals from "globals";

export default [
  {
    ignores: [
      "repositories/task/**",
      "topics/**",
      "dist/**",
      "node_modules/**",
    ], // Must be in its own object
  },
  js.configs.recommended,
  {
    files: ["**/*.{js,mjs,cjs}"],
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
      },
    },
  },
];
