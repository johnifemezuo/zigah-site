/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // brand
        "primary-blue": "#000a4a",
        "primary-blue-hover": "#051268",

        "primary-magenta": "#ff00bb",
        "primary-orange": "#FF6E00",
        "primary-cyan": "#00CCFF",
        "light-gray": "#EBF3FB",
      },
      fontFamily: {
        montserrat: ["Montserrat", "ubuntu"],
        oswald: ["Oswald", "san-serif"],
        sourceSerif: ["Source Serif Pro", "serif"],
      },
      screens: {
        "2xl": "1380px",
        "3xl": "1550px",
        "4xl": "1770px",
        "5xl": "1870px",
      },
    },
  },
  // eslint-disable-next-line no-undef
  plugins: [require("@tailwindcss/typography")],
};

