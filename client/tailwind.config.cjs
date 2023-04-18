/** @type {import('tailwindcss').Config} */
module.exports = {
  content: {
    relative: true,
    files: [
      "./index.html",
      "./pages/*.{js,jsx}",
      "./components/*.{js,jsx}",
    ]
},
  theme: {
    extend: {},
  },
  plugins: [
  ],
}
