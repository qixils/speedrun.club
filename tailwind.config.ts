import type { Config } from 'tailwindcss'
import defaultTheme from 'tailwindcss/defaultTheme'

export default <Partial<Config>>{
  theme: {
    extend: {
      colors: {
        greenkyl: {
          50: '#effef2',
          100: '#d9ffe1',
          200: '#b6fcc4',
          300: '#7cf997',
          400: '#55ee77',
          500: '#13d43e',
          600: '#09b02f',
          700: '#0b8a29',
          800: '#0f6c25',
          900: '#0e5921',
          950: '#01320e'
        },
        pinkyl: {
          50: '#fdf2fb',
          100: '#fce7f9',
          200: '#fccef5',
          300: '#faa7eb',
          400: '#f670dc',
          500: '#ee46c9',
          600: '#dd22aa',
          700: '#c0168d',
          800: '#9f1574',
          900: '#841762',
          950: '#510639'
        }
      },
      fontFamily: {
        'display': ['"Titillium Web"', 'sans-serif'],
      },
    },
  }
}
