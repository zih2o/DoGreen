module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    fontSize: {
      sm: '0.8rem',
      base: '1rem',
      xl: '1.25rem',
      '3xl': '1.953rem',
      '4xl': '2.441rem',
      '5xl': '3.052rem',
    },
    extend: {
      colors: {
        garden1: '#637E69',
        garden2: '#EDF4E8',
        garden3: '#F6E6E5',
        garden4: '#5C5656',
        gardenBG: '#EAE7E8',
        'gardenBG-light': '#EAE7E8',
        forest1: '#57B55F',
        forest2: '#65D26D',
        forest3: '#D09645',
        forest4: '#110E0E',
        forestBG: '#57B55F',
      },
      fontFamily: {
        pacifico: ['Pacifico', 'sans-serif'],
      },
      spacing: {
        320: '80rem',
      },
    },
  },
  plugins: [],
};
