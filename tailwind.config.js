/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      container:{
        center: true,
      },
      colors: {
        "primary-color": "#007456"
      },
      backgroundImage: {
        "background": "rgb(36,200,158)",
        "background": "radial-gradient(circle, rgba(36,200,158,1) 0%, rgba(3,131,98,1) 50%);"
      },
      animation:{
        bunchCustom:"bunchCustom 3s infinite "
      },
      keyframes:{
        bunchCustom:{
          '0%':{
            transform: "translateY(10px)",
          },"50%":{
            transform: "translateY(-10px)",
          },"100%":{
            transform: "translateY(10px)",
          }
        }
      },
    },
  },
  plugins: [ require('@tailwindcss/forms')],
};
