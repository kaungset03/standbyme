/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "#d5a78d",
        card: "#f37600",
        textPrimary: "#100001",
        textSecondary: "#1e1e1e",
        accent: "#7e70bf",
      },
      boxShadow: {
        window: "-6px 6px #100001",
      }
    },
  },
  plugins: [],
};
