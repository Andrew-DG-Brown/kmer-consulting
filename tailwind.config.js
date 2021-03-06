module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    extend: {
      colors: {
        mainOrange: "#FFC13E",
        veryDarkBlue: "#14212A",

        veryLightBlue: "#dfe5e8",
        mediumBlue: "#95ABBB",
        lightGrey: "#a2afb7",
      },
      spacing: {
        120: "32rem",
        0.3: "0.17rem",
      },
    },
  },
  plugins: [],
};
