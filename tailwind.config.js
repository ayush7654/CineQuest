/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors:{
        primary:'white',
        background:'#181818'
      },
      fontFamily:{
        lora: ['Lora', 'serif'],
        allura:['Allura','cursive']
      }
     
    },
  },
  plugins: [
    
  ],
}

