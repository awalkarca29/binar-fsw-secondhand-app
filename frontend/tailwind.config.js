/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", './components/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {},
    fontFamily: {
      'body': ['Poppins', 'sans-serif']
    },
    colors: {
      'light-grey': '#F9F9F9',
      'dark-purple': '#363062',
      'medium-purple': '#4D4C7D',
      'light-purple': '#827397',
      'purple': '#5E5D99',
      'dark-blue': '#A1C3CE',
      'medium-blue': '#B9DBE6',
      'light-blue': '#D8F2FA',
      'soft-blue': '#F2F7FF',
      'black-normal': '#2D3643',
      'white-normal': '#FFFFFF',
      'grey': '#ABB5C5',
      'success': '#52BD7D',
      'danger': '#CB4040',
      'warning': '#FDD64E',
    }
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}
