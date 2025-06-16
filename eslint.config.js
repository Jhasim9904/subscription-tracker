import js from "@eslint/js";
import globals from "globals";
import { defineconfig } from "eslint/config";


export default defineconfig([
  { files: ["**/*.{js,mjs,cjs}"], plugins: { js }, extends: ["js/recommended"] },
  { files: ["**/*.{js,mjs,cjs}"], languageoptions: { globals: globals.node } },
]);
