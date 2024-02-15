/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'ab-red': '#F21717',
        'ab-grey': '#7F7F83',
        'ab-grey-2': '#bab6b6',
        'ab-light-grey': '#D9DBE1',
        'ab-bg': '#F2F3F5',
        'ab-yellow': '#FFFBEC',
        'ab-t-yellow': '#DF9300',
        'ab-b-disabled': '#D9DBE1'
      },
    },
    fontSize: {
      sm: ['14px', '20px'],
      base: ['16px', '24px'],
      md: ['20px', '28px'],
      lg: ['26px', '32px'],
    }
  },
  plugins: [],
}