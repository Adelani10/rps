/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      
      colors: {
        scissorsGradient1: "hsl(39, 89%, 49%)",
        scissorsGradient2: "hsl(40, 84%, 53%)",
        paperGradient1: "hsl(230, 89%, 62%)",
        paperGradient2: "hsl(230, 89%, 65%)",
        rockGradient1: "hsl(349, 71%, 52%)",
        rockGradient2: "hsl(349, 70%, 56%)",
        realCyan: "hsl(189, 59%, 53%) to hsl(189, 58%, 57%)",
        darkText: "hsl(229, 25%, 31%)",
        scoreText: "hsl(229, 64%, 46%)",
        headerOutline: "hsl(217, 16%, 45%)",
        radialGradient: "hsl(214, 47%, 23%) to hsl(237, 49%, 15%)",
      },
    },
  },
  plugins: [],
};
