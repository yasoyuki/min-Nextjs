/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [ "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
  "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
  "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  "./src/app/**/*.{js,ts,jsx,tsx,mdx}",],
  theme: {
    extend: {
      fontSize: {
        // xs: '0.85rem',
      },
      colors: {
        // 'lightblue': '#1AD7DB'
      },
    },
    
  },
  plugins: [],
}
