/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",       // app folder এর সব js/ts/jsx/tsx
    "./components/**/*.{js,ts,jsx,tsx}" // components folder এর সব file
  ],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
};
