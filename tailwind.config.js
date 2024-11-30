/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx,css}",
    "./public/index.html", 
  ],
  
  theme: {
    extend: {
      colors: {
        primary: "#F26419",
        grey: "#C4C4C4",
        dark: "#121212",
      },
      fontFamily: {
        display: ["Favorit Pro"],
        body: ["Futura"],
      },
    },
  },
  plugins: [],
};
