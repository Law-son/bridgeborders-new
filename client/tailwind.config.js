/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontWeight: {
        'medium': 500,  // Custom font weight
      },
      screens: {
      sm: "480px",    // Small devices (mobile)
      md: "768px",    // Medium devices (tablet)
      lg: "1024px",   // Large devices (larger tablets and small desktops)
      xl: "1280px",   // Extra large devices (desktops and large screens)
      "2xl": "1536px" // Ultra large devices (large desktops)
    },
      colors: {
        primaryGreen: "hsl(175, 35%, 30%)",
        lightGrey: "hsl(230, 60%, 98%)",
        lightBlue: "hsl(217, 100%, 95%)",
        lightGreen: "hsl(120, 33%, 93%)",
        lightPink: "hsl(278, 65%, 97%)",
        pink: "hsl(12, 67%, 94%)",
        lightOrange: "hsl(45, 100%, 92%)",
        darkBlue: "hsl(221, 39%, 11%)"
      }
    },
  },
  plugins: [],
}