'use strict';

const {esNextPaths} = require('./scripts/shared/pathsByLanguageVersion');

module.exports = {
  bracketSpacing: false,
  singleQuote: true,
  jsxBracketSameLine: true,
  parser: 'babel',

  overrides: [
    {
      files: esNextPaths,
      options: {
        trailingComma: 'all',
      },
    },
  ],
};
