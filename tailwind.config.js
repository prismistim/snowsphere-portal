module.exports = {
  dark: true,
  content: [
    "./index.html",
    "./pages/**/*.{vue,js,ts,jsx,tsx}",
    "./renderer/**/*.{vue,js,ts,jsx,tsx}",
    "./components/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      'sans': ['Heebo', 'sans-serif'],
      'mono': ['Ubuntu Mono', 'monospace']
    },
    extend: {},
  },
  plugins: [],
}
