/** @type {import('tailwindcss').Config} */
export default {
  theme: {
    screens: {
      sm: "640px",
      md: "768px",
      // Tablet range: 810px to 1023px (completely separate from desktop)
      tablet: "810px",
      // Desktop range: 1024px and above (completely separate from tablet)
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
    extend: {
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
     
        
      },
      animation: {
        float: 'float 3s ease-in-out infinite',
      },
    },
  },
};

