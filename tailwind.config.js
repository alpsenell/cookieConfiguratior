/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js}'],
  content: [],
  theme: {
    extend: {},
    colors: {
      'transparent': 'var(--transparent)',
      'brand': 'var(--brand)',
      'blue': 'var(--blue)',
      'cyan': 'var(--cyan)',
      'green': 'var(--green)',
      'primary': 'var(--primary)',
      'primary-mid-light': 'var(--primary-mid-light)',
      'primary-light': 'var(--primary-light)',
      'primary-lighter': 'var(--primary-lighter)',
      'primary-dark': 'var(--primary-dark)',
      'primary-dark-tint-1': 'var(--primary-dark-tint-1)',
      'primary-dark-tint-2': 'var(--primary-dark-tint-2)',
      'primary-darker': 'var(--primary-darker)',
      'dark': 'var(--dark)',
      'darker': 'var(--darker)',
      'secondary': 'var(--secondary)',
      'secondary-light': 'var(--secondary-light)',
      'light': 'var(--light)',
      'grey': 'var(--grey)',
      'grey-light': 'var(--grey-light)',
      'grey-dark': 'var(--grey-dark)',
      'error': 'var(--error)',
      'accent': 'var(--accent)',
      'accent-light': 'var(--accent-light)',
      'white': 'var(--white)',
      'black': 'var(--black)',
      'tertiary-blue': 'var(--tertiary-blue)',
      'tertiary-yellow': 'var(--tertiary-yellow)',
      'tertiary-pink': 'var(--tertiary-pink)',
    },
  },
  plugins: [],
};
