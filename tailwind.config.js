/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "brand-primary": "#005288",
        "brand-secondary": "#f68e34",
        "brand-bg": "#F2F2F2",
        "brand-text": "#3B3B3B",

        //dark theme colors
        "brand-dark-bg": "#0D0D0D",
        "brand-dark-text": "#BABABA",
        "brand-dark-title": "#CFE4F1",
      },
    },
  },
  plugins: [require("daisyui")],
};
