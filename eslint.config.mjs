import globals from 'globals';
import pluginJs from '@eslint/js';
import tseslint from 'typescript-eslint';

/** @type {import('eslint').Linter.Config[]} */
export default [

  { languageOptions: { globals: globals.node } },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  {
    rules: {
      'no-debugger': 'error',
    },
  },
  {
    ignores: ['node_modules', 'build'],
  },

    { languageOptions: { globals: globals.node } },
    pluginJs.configs.recommended,
    ...tseslint.configs.recommended,
    {
        rules: {
            'no-debugger': 'error',
        },
    },
    {
        ignores: ['node_modules', 'build'],
    },

];
