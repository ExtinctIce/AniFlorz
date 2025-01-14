/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true,
      padding: "5px",
    },
    extend: {
      backgroundImage: {
        "custom-gradient":
          "radial-gradient(circle, rgba(0, 0, 0, .235) 0, rgba(0, 0, 0, .477) 28%, rgba(0, 0, 0, .678) 62%, rgba(0, 0, 0, .863) 87%), linear-gradient(0deg, #000, transparent 40%)",
      },
    },
  },
  plugins: [],
};
