/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./App.{js,jsx,ts,tsx}", "./<custom directory>/**/*.{js,jsx,ts,tsx}"],
    theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(20 5.9% 90%)",
        input: "hsl(20 5.9% 90%)",
        ring: "hsl(24.6 95% 53.1%)",
        background: "hsl(0 0% 98%)",
        foreground: "hsl(20 14.3% 4.1%)",
        primary: {
          DEFAULT: "hsl(24.6 95% 53.1%)",
          foreground: "hsl(60 9.1% 97.8%)",
        },
        secondary: {
          DEFAULT: "hsl(0 0% 95%)",
          foreground: "hsl(24 9.8% 10%)",
        },
        destructive: {
          DEFAULT: "hsl(0 84.2% 60.2%)",
          foreground: "hsl(60 9.1% 97.8%)",
        },
        muted: {
          DEFAULT: "hsl(0 0% 95%)",
          foreground: "hsl(25 5.3% 44.7%)",
        },
        accent: {
          DEFAULT: "hsl(0 0% 95%)",
          foreground: "hsl(24 9.8% 10%)",
        },
        popover: {
          DEFAULT: "hsl(0 0% 98%)",
          foreground: "hsl(20 14.3% 4.1%)",
        },
        card: {
          DEFAULT: "hsl(0 0% 98%)",
          foreground: "hsl(20 14.3% 4.1%)",
        },
      },
      borderRadius: {
        lg: "0.5rem",
        md: "calc(0.5rem - 2px)",
        sm: "calc(0.5rem - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: 0 },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: 0 },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [],
}