/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx,html}",
  ],
  theme: {
    extend: {
      colors: {
        'menuButton': '#739BA3',
        'tableHeader': '#88A99F',
        'tableRow': '#DAE1DF',
        'tableRowHover': '#EDF1F0',
      },
    },
  },
  plugins: [],
}

