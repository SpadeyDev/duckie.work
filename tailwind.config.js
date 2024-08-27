/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      poppins: ["Poppins"],
    },
    extend: {
      animation: {
        gradient: "gradient 8s linear infinite",
        "border-beam":
          "border-beam calc(var(--duration)*1s) infinite linear",
      },
      keyframes: {
        gradient: {
          to: {
            backgroundPosition: "var(--bg-size) 0",
          },
        },
        "border-beam": {
          "100%": {
            "offset-distance": "100%",
          },
        },
      },
    },
  },
  plugins: [],
};
