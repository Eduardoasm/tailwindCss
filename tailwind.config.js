/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
    },
    fontFamily: {
      display: ['Gilroy', 'sans-serif'],
      body: ['Graphik', 'sans-serif'],
    },
    borderWidth: {
      default: '1px',
      '0': '0',
      '2': '2px',
      '4': '4px',
    },
    extend: {
      backgroundImage: {
        'restaurant': "url('https://images.unsplash.com/photo-1555396273-367ea4eb4db5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=667&q=80')",
      },
      colors: {
        cyan: '#9cdbff',
        'primary': '#f3c614',
        'secondary': '#353535' 
      },
      height: {
        '80': '20rem'
      },
      spacing: {
        '96': '24rem',
        '128': '32rem',
      }
    }
  },
  variants: {
    appearance: ['responsive'],

    borderColor: ['responsive', 'hover', 'focus'],

    outline: ['responsive', 'focus'],

    zIndex: ['responsive'],
  },
  plugins: [],
}
