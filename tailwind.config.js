module.exports = {  
  content: [   
        "./pages/**/*.{js,ts,jsx,tsx}",   
        "./components/**/*.{js,ts,jsx,tsx}",
        "./node_modules/react-tailwindcss-datepicker/dist/index.esm.js"
         ],
  theme: {   
         extend: {},
         },  
  plugins: [
       require('@tailwindcss/forms')
  ],
}