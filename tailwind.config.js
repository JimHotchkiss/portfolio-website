module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    screens: {
          'sm': '480px',
          // => @media (min-width: 640px) { ... }
    
          'md': '547px',
          // => @media (min-width: 768px) { ... }
    
          'lg': '768px',
          // => @media (min-width: 1024px) { ... }
    
          'xl': '1024px',
          // => @media (min-width: 1280px) { ... }
    
          '2xl': '1680px',
          // => @media (min-width: 1536px) { ... }
  
    }, 
    container: {
      center: true,
      padding: '1rem',
    },
    about_container: {
      center: true,
      // padding: '1rem',
    },
    extend: {
      colors: {
        primary: '#0f172a',
        secondary: '#1e293b',
        react_blue: '#63dbfb',
        linkedin_blue: '#1064c4',
        twitter_blue: '#1c87ec'
      }
    },
  },
  plugins: [],
}
