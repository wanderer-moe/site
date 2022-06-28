/** @type {import('tailwindcss').Config} */

module.exports = {
    content: [
      './src/**/*.{html,svelte}',
    ],
    options: {
      whitelistPatterns: [/svelte-/],
      defaultExtractor: (content) =>
        [...content.matchAll(/(?:class:)*([\w\d-/:%.]+)/gm)].map(([_match, group, ..._rest]) => group),
    },
  plugins: [],
};
