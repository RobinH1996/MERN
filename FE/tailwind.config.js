/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        xs: "600px",
      },
      boxShadow: {
        custom:
          "0px  6px  4px -4px rgba(0,  0,  0,  0.02),  0px  0px  0px  1px rgba(0,  0,  0,  0.06)",
        "button-custom":
          "0px 6px 4px -4px rgba(0, 0, 0, 0.08), 0px -1px 0px 0px #0049B8 inset, 0px 1px 0px 0px #297EFF inset, 0px 0px 0px 1px #002966",
        "input-shadow": "0px 0px 0px 1px rgba(0, 0, 0, 0.08)",
        "get-shadow": "0px -2px 0px 0px rgba(243, 243, 247, 0.10) inset",
        "shadow-100":
          "0px 8px 48px -8px rgba(31, 51, 71, 0.05), 0px 8px 16px -8px rgba(31, 51, 71, 0.04)",
      },
      container: {
        center: true,
        padding: "24px",
      },
      colors: {
        mainColour1: "#00838C",
        mainColour2: "#09757A",
        mainColour3: "#D8EFEF",
        blackColour: "#111111",
        whiteColour: "#FFFFFF",
        errorColour: "#F50000",
        "light-100": "#F0F0F0",
      },
    },
  },
  plugins: [],
};
