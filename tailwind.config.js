/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [],
  theme: {
    extend: {
      backgroundImage: {
        'cross-lines': `
          linear-gradient(45deg, #ddd 25%, transparent 25%),
          linear-gradient(-45deg, #ddd 25%, transparent 25%),
          linear-gradient(45deg, transparent 75%, #ddd 75%),
          linear-gradient(-45deg, transparent 75%, #ddd 75%)`
      },
      backgroundSize: {
        '20': '20px 20px', // Control cross spacing
      }
    }
  },
  plugins: [],
}

