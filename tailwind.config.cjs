/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [  "./index.html",
  "./src/**/*.{js,ts,jsx,tsx}",
],
  theme: {
    container: {
      center: true,
    },
    extend: {
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'textColor': 'hsl(68.57,2.81%,51.18%)',
      'primaryColor': `hsl(72,11.11%,8.82%)`,
      'secondaryColor': 'hsl(53.68,9.64%,38.63%)',
      'accentColor': 'hsl(186,94.74%,37.25%)',
    },
  },
  plugins: [],
}