/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "#d5a78d",
        card: "#f37600",
        textPrimary: "#100001",
        textSecondary: "#ec4719",
        accent: "#7e70bf",
      },
    },
  },
  plugins: [],
};
