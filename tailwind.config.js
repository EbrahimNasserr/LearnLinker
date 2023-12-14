/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        amiri: ["Amiri", "serif"],
        Almarai: ["Almarai", "sans-serif"]
      },
      backgroundColor: {
        'primary-rgba': 'rgba(0, 0, 0, 0.4)',
      },
      backgroundImage: {
        'gradient': 'linear-gradient(90deg, #0000, #334155, #334155)',
      },
    },
    screens: {
      xxl: { max: "1050px" },
      xl: { max: "1200px" },
      lg: { max: "991px" },
      md: { max: "767px" },
      sm: { max: "550px" },
      xsm: { max: "375px" },
    },
    colors: {
      secondColor: "#0f172a",
      primaryColor: "#0077ff",
      aboutSectionColor: "#D83F31",
      yellowColor: "#f6e05e",
      blackColor: "#080c14",
      whiteColor: "#fff",
      blueColor: "#04364A",
      lightBlueColor: "#0077ff",
      boxBorder: "#333"
    },
  },
  plugins: [],
}


