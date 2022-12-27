module.exports = {
  darkMode: 'class',
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    fontSize: {
      sm: '0.8rem',
      base: '1rem',
      xl: '1.25rem',
      '2xl': '1.5rem',
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

        forest1: '#57B55F',
        forest2: '#65D26D',
        forest3: '#D09645',
        forest4: '#110E0E',
        forestBG: '#151311',

        navBg: 'rgba(92, 86, 86, 0.54)',
        leftSide: '#637E69',
        navbarBG: '#5C5656',
      },
      backgroundColor: {
        garden1: 'var(--color-bg-garden1)',
        garden2: 'var(--color-bg-garden2)',
        garden3: 'var(--color-bg-garden3)',
        garden4: 'var(--color-bg-garden4)',
        gardenBG: 'var(--color-bg-gardenBG)',
        navBg: 'var(--color-bg-navBg)',
        leftSide: 'var(--color-bg-leftSide)',
        navbarBG: 'var(--color-bg-navbarBG)'
      },
      textColor: {
        garden1: 'var(--color-text-garden1)',
        garden2: 'var(--color-text-garden2)',
        garden3: 'var(--color-text-garden3)',
        garden4: 'var(--color-text-garden4)',
        gardenBG: 'var(--color-text-gardenBG)',
      },

      fontFamily: {
        pacifico: ['Pacifico', 'sans-serif'],
      },
      spacing: {
        320: '80rem',
      },
      keyframes: {
        leftMove: {
          '0%': {
            transform: 'translateX(50px)',
          },
          '100%': {
            transform: 'translateX(-850px)',
          },
        },
        rightMove: {
          '0%': {
            transform: 'translateX(-900px)',
          },
          '100%': {
            transform: 'translateX(50px)',
          },
        },
      },
      animation: {
        slider1: 'rightMove 20s linear infinite',
        slider2: 'leftMove 20s linear infinite',
      },
    },
  },
  mode: 'jit',
  plugins: [require('@kamona/tailwindcss-perspective')],
};
