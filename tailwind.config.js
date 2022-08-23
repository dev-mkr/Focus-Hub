/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      textColor: {
        base: "rgb(var(--color-text-base) / <alpha-value> )",
      },
      backgroundColor: {
        primary: "rgb(var(--color-primary) / <alpha-value> )",
        secondary: "rgb(var(--color-secondary) / <alpha-value> )",
      },
      borderColor: {
        base: "rgb(var(--color-border) / <alpha-value> )",
      },
      backdropBlur: {
        "4xl": "74px",
      },
    },
  },
  plugins: [],
};
