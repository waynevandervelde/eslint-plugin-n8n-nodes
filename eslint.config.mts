// @ts-check
import js from '@eslint/js';
import tseslint from 'typescript-eslint';
import { globalIgnores } from 'eslint/config';
import json from '@eslint/json';
import markdown from '@eslint/markdown';
import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended';
//import eslintConfigPrettier from "eslint-config-prettier/flat";

export default tseslint.config(
	//  eslintConfigPrettier,
	globalIgnores(['node_modules']),
	{
		name: 'JavaScript FSiles',
		files: ['**/*.{js,mjs,cjs}'],
		plugins: { js },
		extends: [js.configs.recommended],
	},
	{
		name: 'TypeScript Files',
		files: ['**/*.{ts,mts,cts}'],
		plugins: { js },
		extends: [js.configs.recommended, tseslint.configs.strict, tseslint.configs.stylistic],
	},
	{
		name: 'JSON Files',
		files: ['**/*.json'],
		plugins: { json },
		language: 'json/json',
		extends: [json.configs.recommended],
	},
	{
		name: 'Markdown Files',
		files: ['**/*.md'],
		plugins: { markdown },
		language: 'markdown/gfm',
		extends: [markdown.configs.recommended],
	},
	eslintPluginPrettierRecommended,
);
