/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#07172B",
        navy: "#0B2A4A",
        blue: "#1467D7",
        cyan: "#28A7E8",
        green: "#28A745",
        lime: "#73D13D",
        mist: "#F5F8FC",
        line: "#E4EAF2",
      },
      boxShadow: {
        soft: "0 18px 55px rgba(8, 35, 68, 0.10)",
        card: "0 12px 36px rgba(8, 35, 68, 0.08)",
      },
      backgroundImage: {
        "hero-grid":
          "linear-gradient(rgba(20,103,215,.06) 1px, transparent 1px), linear-gradient(90deg, rgba(20,103,215,.06) 1px, transparent 1px)",
      },
    },
  },
  plugins: [],
};