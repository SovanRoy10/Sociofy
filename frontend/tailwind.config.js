module.exports = {
  mode: "jit",
  content: ["./src/**/**/*.{js,ts,jsx,tsx,html,mdx}", "./src/**/*.{js,ts,jsx,tsx,html,mdx}"],
  darkMode: "class",
  theme: {
    screens: { md: { max: "1050px" }, sm: { max: "550px" } },
    extend: {
      colors: {
        gray: {
          100: "#f7f7f7",
          500: "#8f92a1",
          800: "#4b4c4d",
          900: "#1e1f20",
          "500_33": "#8f92a133",
          "900_66": "#1e1f2066",
          "500_66": "#8f92a166",
          "500_99": "#8f92a199",
        },
        white: {
          A700: "#ffffff",
          A700_99: "#ffffff99",
          A700_33: "#ffffff33",
          A700_cc: "#ffffffcc",
          A700_66: "#ffffff66",
        },
        indigo: { 600: "#39579b", A200: "#666aec", A200_33: "#666aec33" },
        light_blue: { 200: "#79d0f1", "200_33": "#79d0f133" },
        green: { 400: "#53d769" },
        red: { A200: "#ff4e4e" },
      },
      boxShadow: {},
      fontFamily: { inter: "Inter", sfprodisplay: "SF Pro Display" },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
