/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{js,ts,jsx,tsx,mdx}', './src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    screens: {
      d2560: { min: '2560px' },
      d1920: { max: '1920px' },
      d1728: { max: '1728px' },
      d1600: { max: '1600px' },
      d1536: { max: '1536px' },
      d1440: { max: '1440px' },
      d1366: { max: '1366px' },
      d1280: { max: '1280px' },
      d1194: { max: '1194px' },
      t1024: { max: '1024px' },
      t834: { max: '834px' },
      t768: { max: '768px' },
      m640: { max: '640px' },
      m450: { max: '450px' },
      m375: { max: '375px' },
      m320: { max: '320px' }
    },
    fontFamily: {
      Lufga100: ['Lufga100'],
      Lufga200: ['Lufga200'],
      Lufga300: ['Lufga300'],
      Lufga400: ['Lufga400'],
      Lufga500: ['Lufga500'],
      Lufga600: ['Lufga600'],
      Lufga700: ['Lufga700'],
      Lufga800: ['Lufga800'],
      Lufga900: ['Lufga900'],
      LufgaItalic100: ['LufgaItalic100'],
      LufgaItalic200: ['LufgaItalic200'],
      LufgaItalic300: ['LufgaItalic300'],
      LufgaItalic400: ['LufgaItalic400'],
      LufgaItalic500: ['LufgaItalic500'],
      LufgaItalic600: ['LufgaItalic600'],
      LufgaItalic700: ['LufgaItalic700'],
      LufgaItalic800: ['LufgaItalic800'],
      LufgaItalic900: ['LufgaItalic900']
    },
    extend: {}
  }
};

