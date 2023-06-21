module.exports = {
    parser: "babel-eslint",
    extends: [
      "plugin:svelte/recommended",
    ],
    ignorePatterns: ['*.cjs'],
    rules: {
      'svelte/no-trailing-spaces': 'error'
    },
  }