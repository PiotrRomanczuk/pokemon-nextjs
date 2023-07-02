/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'mainRed': 'rgba(239, 47, 22, 1)',
        'darkRed': 'rgba(185, 37, 17, 1)',
        'blue': 'rgba(56, 61, 191, 1)',
        'yellow': 'rgba(250, 221, 43, 1)',
        'darkYellow': 'rgba(167, 153, 44, 1)',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      spacing: {
        '128': '32rem',
      }
    },
  },
  plugins: [],
}
