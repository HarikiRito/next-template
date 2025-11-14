// @ts-check
import eslint from '@eslint/js';
import nextPlugin from '@next/eslint-plugin-next';
// @ts-expect-error - no types available
import biome from 'eslint-config-biome';
import perfectionist from 'eslint-plugin-perfectionist';
import reactHooks from 'eslint-plugin-react-hooks';
import reactYouMightNotNeedAnEffect from 'eslint-plugin-react-you-might-not-need-an-effect';
import tseslint from 'typescript-eslint';

/**
 * ESLint configuration for Next.js project with Biome integration
 *
 * Division of Responsibilities (Conservative Migration Strategy):
 * - Biome: Formatting + basic linting only (organizeImports DISABLED)
 * - ESLint: Type-aware linting + all sorting (imports, objects, enums, JSX, etc.)
 *
 * Includes:
 * - TypeScript ESLint strict + stylistic type-aware rules
 * - Perfectionist recommended-natural (all sorting rules)
 * - React best practices and Next.js rules
 * - Biome config compatibility layer (MUST be last to disable conflicting rules)
 */
export default [
	eslint.configs.recommended,
	...tseslint.configs.strictTypeChecked,
	...tseslint.configs.stylisticTypeChecked,
	// perfectionist.configs['recommended-natural'],
	reactYouMightNotNeedAnEffect.configs.recommended,
	{
		languageOptions: {
			parserOptions: {
				projectService: true,
				tsconfigRootDir: import.meta.dirname,
			},
		},
	},
	{
		plugins: {
			'@next/next': nextPlugin,
			'react-hooks': reactHooks,
		},
		rules: {
			...nextPlugin.configs.recommended.rules,
			...nextPlugin.configs['core-web-vitals'].rules,
			...reactHooks.configs.recommended.rules,
		},
	},
	{
		rules: {
			'@typescript-eslint/await-thenable': 'error',
			'@typescript-eslint/ban-tslint-comment': 'off',
			'@typescript-eslint/consistent-type-imports': ['error', { prefer: 'type-imports' }],
			'@typescript-eslint/no-confusing-void-expression': 'off',
			'@typescript-eslint/no-deprecated': 'warn',
			// TypeScript strict rules
			'@typescript-eslint/no-explicit-any': 'error',
			'@typescript-eslint/no-extraneous-class': 'off',
			'@typescript-eslint/no-floating-promises': 'error',
			'@typescript-eslint/no-misused-promises': 'error',
			'@typescript-eslint/no-non-null-assertion': 'warn',
			'@typescript-eslint/no-unnecessary-condition': 'off',
			'@typescript-eslint/no-unnecessary-type-assertion': 'error',
			'@typescript-eslint/no-unnecessary-type-parameters': 'off',
			'@typescript-eslint/no-unsafe-argument': 'off',
			'@typescript-eslint/no-unused-vars': [
				'error',
				{
					args: 'after-used',
					argsIgnorePattern: '^_',
					caughtErrorsIgnorePattern: '^(_|ignore)',
					destructuredArrayIgnorePattern: '^_',
					ignoreRestSiblings: false,
					vars: 'all',
					varsIgnorePattern: '^_',
				},
			],
			'@typescript-eslint/prefer-nullish-coalescing': 'off',
			'@typescript-eslint/prefer-optional-chain': 'off',
			'@typescript-eslint/require-await': 'off',
			'@typescript-eslint/restrict-template-expressions': 'off',
			'@typescript-eslint/strict-boolean-expressions': 'off', // React conditionals

			'@typescript-eslint/switch-exhaustiveness-check': 'error',
			'@typescript-eslint/unbound-method': 'off',
			// Project-specific rules
			eqeqeq: 'error',

			// Code style rules
			'no-console': ['warn', { allow: ['warn', 'error', 'info'] }],
			// Disabled overly strict rules
			'no-constant-binary-expression': 'off',
			'no-restricted-imports': [
				'warn',
				{
					patterns: ['../../*'],
				},
			],

			'prefer-const': 'error',
			'prefer-template': 'error',
			'react-hooks/incompatible-library': 'warn'
		},
	},
	{
		ignores: ['.next', 'out', 'build', 'dist', 'coverage', 'node_modules'],
	},
	// MUST be last: Disable ESLint rules that conflict with Biome
	biome,
];
