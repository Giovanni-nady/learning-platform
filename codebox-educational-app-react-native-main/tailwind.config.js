/** @type {import('tailwindcss').Config} */
module.exports = {
 content: ["./App.{js,jsx,ts,tsx}", "./App/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primaryBackground: "#FFFFFF",
        secondaryBackground: "#2D2D2D",
        accentBackground: "#50577A",
        primaryButton: "#251A2B",
        secondaryButton: "#e2d9e8",
        successButton: "",
        disabledButton: "#ff8b80",
        dangerButton: "",
        borderButton: "#F0F0F0",
        primaryText: "#FFFFFF",
        secondaryText: "#707070",
        accentText: "",
        inputBack: "#F0F0F0",
        inputBackground: "#F0F0F0",
        inputText: "#707070",
        danger: "#bb2124",
        icons: "#C4C4C4",
      },
      fontFamily: {
        poppins: ["Poppins"],
        cairo: ["Cairo"],
      },
    },
  },
  plugins: [],
}

