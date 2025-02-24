import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";
import pluginReact from "eslint-plugin-react";
import eslintConfigPrettier from "eslint-config-prettier";

/** @type {import('eslint').Linter.Config[]} */
export default [
  {files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"]},
  {languageOptions: { globals: globals.browser }},
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  pluginReact.configs.flat.recommended,
  pluginReact.configs.flat.jsxRuntime,
  eslintConfigPrettier, 
  eslintConfigPrettier.configs.recommended,
  eslintConfigPrettier.configs.recommendedTypescript,
  eslintConfigPrettier.configs.recommendedReact,
  eslintConfigPrettier.configs.recommendedReactTypescript,
  eslintConfigPrettier.configs.recommendedJsxRuntime,
  eslintConfigPrettier.configs.recommendedReactJsxRuntime,
  eslintConfigPrettier.configs.recommendedReactTypescriptJsxRuntime,
];