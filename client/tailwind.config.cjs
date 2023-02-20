/** @type {import('tailwindcss').Config} */

function themeConfig() {
  console.log("VITE_THEME_MODE");
  return {
      "primary": "#30baa8",
      "secondary": "#3b615c",
      "third": "#44cee3",
  }
}

module.exports = {
  darkMode: 'class',
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "primary-500": "#c942a8",
        ...themeConfig()
      },
    },
  },
  plugins: [],
};
