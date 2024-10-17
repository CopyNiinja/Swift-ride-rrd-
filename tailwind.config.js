/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html","./src/**/*.{html,js,jsx,tsx}"],
  theme: {
   
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    extend: {},
    fontFamily:{
      sans:["Poppins"],
      hello:["Caveat"]
    }
  
  },
  plugins: [],
}

