/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        raleway: ['raleway'],
        // inter: ['Inter', 'sans-serif'],
      },
      colors: {
        'primary-SmokyBlack': '#25291C',
        'primary-OrangeGreen': '#ABFF4F',
        'primary-Green': '#29BF12',
        'primary-LightRed': '#F97068',
        'primary-Blue': '#08BDBD',
        'primary-SmokyDarkBlack': '#121212',
        'primary-SmokyLightBlack': '#675252',
      }
    },
  },
  plugins: [],
}