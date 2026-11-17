/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./dashboard/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          blue: "#20a8df",       // Exact Uno Minda glowing blue
          darkBlue: "#0b7aa8",   // Deep accent blue
          glow: "#38bdf8",       // Bright electric cyan
          lightBlue: "#e0f4fc",  // Soft glowing blue surface tint
          red: "#ff2e17",        // Logo red arrow accent
          dark: "#0f172a",
        },
      },
      boxShadow: {
        'glow-sm': '0 0 10px rgba(32, 168, 223, 0.25)',
        'glow-md': '0 0 20px rgba(32, 168, 223, 0.35)',
        'glow-lg': '0 0 30px rgba(32, 168, 223, 0.45)',
      },
    },
  },
  plugins: [],
}
