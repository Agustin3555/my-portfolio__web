/**
 * @see https://prettier.io/docs/configuration
 * @type {import("prettier").Config}
 */
const config = {
  printWidth: 80,
  trailingComma: 'all',
  arrowParens: 'avoid',
  semi: false,
  singleQuote: true,
  endOfLine: 'auto',

  plugins: ['prettier-plugin-astro'],
  overrides: [
    {
      files: '*.astro',
      options: { parser: 'astro' },
    },
  ],
}

export default config
