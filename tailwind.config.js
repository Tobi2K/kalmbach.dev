module.exports = {
  content: [
    './components/**/*.{js,vue,ts}',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
  ],
  plugins: [require('@tailwindcss/forms')],
}
