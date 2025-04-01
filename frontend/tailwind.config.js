/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        roboto: ['Roboto', 'sans-serif'], // Define your Google Font
      },
      colors:{
        heading:"#e3e3e4",
        button2:"#DB4444",
        secondary:"#F5F5F5",
        text2:'#000000'
        
      },
      fontSize:{}
    },
    },
  
  plugins: [],
}