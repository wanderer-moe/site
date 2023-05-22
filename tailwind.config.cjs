/** @type {import('tailwindcss').Config} */

const plugin = require('tailwindcss/plugin')

module.exports = {
    content: [
      './src/**/*.{html,svelte,ts,js}',
    ],
    options: {
      whitelistPatterns: [/svelte-/],
      defaultExtractor: (content) =>
        [...content.matchAll(/(?:class:)*([\w\d-/:%.]+)/gm)].map(([_match, group, ..._rest]) => group),
    },
    theme: {
      extend: {
        'animation': {
              'text':'text 1s ease infinite',
          },
          'keyframes': {
              'text': {
                  '0%, 100%': {
                     'background-size':'200% 200%',
                      'background-position': 'left center'
                  },
                  '50%': {
                     'background-size':'200% 200%',
                      'background-position': 'right center'
                  }
              },
          },
          textShadow: {
            sm: '0 1px 2px var(--tw-shadow-color)',
            DEFAULT: '0 2px 4px var(--tw-shadow-color)',
            lg: '0 8px 16px var(--tw-shadow-color)',
          }
      },
    },
  plugins: [
    plugin(function ({ matchUtilities, theme }) {
      matchUtilities(
        {
          'text-shadow': (value) => ({
            textShadow: value,
          }),
        },
        { values: theme('textShadow') }
      )
    }),
  ],
};
