import finsweetConfigs from '@finsweet/eslint-config';

export default [
  ...finsweetConfigs,
  // Node.js globals for bin scripts (build.js runs in Node)
  {
    files: ['bin/**/*.js'],
    languageOptions: {
      globals: {
        process: 'readonly',
        console: 'readonly',
      },
    },
  },
];
