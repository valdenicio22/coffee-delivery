/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'base-white': '#FFFFFF',
        'base-background': '#FAFAFA',
        'base-card': '#F3F2F2',
        'base-input': '#EDEDED',
        'base-button': '#E6E5E5',
        'base-hover': '#D7D5D5',
        'base-label': '#8D8686',
        'base-error': '#f84747',

        'base-text': '#574F4D',
        'base-subtitle': '#403937',
        'base-title': '#272221',

        'brand-purple-dark': '#4B2995',
        'brand-purple': '#8047F8',
        'brand-purple-light': '#EBE5F9',

        'brand-yellow-dark': '#C47F17',
        'brand-yellow': '#DBAC2C',
        'brand-yellow-light': '#F1E9C9',
      },
      fontSize: {
        'title-xl': '3rem',
        'title-l': '2rem',
        'title-m': '1.5rem',
        'title-s': '1.25rem',
        'title-xs': '1.125rem',

        'text-l': '1.25rem',
        'text-m': '1rem',
        'text-s': '0.875rem',
        'text-xs': '0.75rem',

        'tag-m': '0.625rem',
        'button-g': '0.875rem',
        'button-s': '0.75rem',
      },
      fontFamily: {
        regular: "'Roboto'",
        title: "'Baloo 2'",
      },
    },
    plugins: [],
  },
}
