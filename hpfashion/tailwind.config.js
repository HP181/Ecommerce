module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    screens: {
      'sm': {'min': '280px', 'max': '375px'},

      'md': {'min': '375px', 'max': '768px'},
  
      'lg': {'min': '768px', 'max': '1024px'},
  
      'xl': {'min': '1024px', 'max': '1458px'}
    }
  },
  plugins: [],
}