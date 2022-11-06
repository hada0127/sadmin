module.exports = {
    "env": {
      browser: true,
      es2017: true,
      node: true
    },
    "extends": "eslint:recommended",
    "parserOptions": {
      ecmaVersion: 2020,
      sourceType: "module"
    },
    plugins: [
      'svelte3'
    ],
    overrides: [
      {
        files: ['*.svelte'],
        processor: 'svelte3/svelte3'
      }
    ],
    "rules": {
    }
};