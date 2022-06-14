const colors = require("tailwindcss/colors");
delete colors["lightBlue"]; // A bit hackful but fixes - https://github.com/tailwindlabs/tailwindcss/issues/4690
delete colors["warmGray"];
delete colors["trueGray"];
delete colors["coolGray"];
delete colors["blueGray"];

module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{astro,html,js,jsx,md,svelte,ts,tsx,vue}"],
  safelist: ["dark"],
  theme: {
    colors: {
      ...colors,
      // Shades-of-X
      // keep one group of colors enabled at a time
      primary: colors.purple[700],
      primaryDark: colors.purple[300],
      primarySecondary: colors.purple[800],
      primarySecondaryDark: colors.purple[500],
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
