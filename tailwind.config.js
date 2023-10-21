/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        Peru: "#D87D4A",
        ChineseBlack: "#101010",
        AntiFlashWhite: "#F1F1F1",
        Lotion: "#FAFAFA",
        VeryLightTangelo: "#FBAF85",
        Darkgray: "#4C4C4C",
        AmericanSilver: "#CFCFCF",
        SpanishGray: "#979797",
        PersianRed: "#CD2C2C",
      },
      fontFamily: {
        Manrope: ["Manrope", "sans-serif"],
      },
      backgroundImage: {
        headphoneimg: "url('../assets/headphoneimg.png')",
      },
      letterSpacing: {
        thewidest: "0.6250em",
      },
      minHeight: {
        "1/2": "50%",
      },
    },
  },
  plugins: [],
};
