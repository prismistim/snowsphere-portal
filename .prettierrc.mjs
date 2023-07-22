/** @type {import("prettier").Options} */
const config = {
  trailingComma: "es5",
  tabWidth: 2,
  semi: false,
  singleQuote: true,
  plugins: [
    import('prettier-plugin-tailwindcss')
  ]
}

export default config
