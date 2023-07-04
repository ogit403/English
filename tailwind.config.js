/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        // please use font-ggsans-medium for font-weight: 500 | 600
        main: ['Comfortaa'],
      },
    },
  },
  plugins: [],
}

