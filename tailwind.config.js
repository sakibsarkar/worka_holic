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
      colos: {
        "primary-color": "#007456"
      },
      backgroundImage: {
        "background": "rgb(36,200,158)",
        "background": "radial-gradient(circle, rgba(36,200,158,1) 0%, rgba(3,131,98,1) 50%);"
      },
    },
  },
  plugins: [],
};
