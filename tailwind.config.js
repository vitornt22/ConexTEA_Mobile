/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./App.{js,jsx,ts,tsx}', './src/**/*.{js,jsx,ts,tsx}'],
  presets: [require('nativewind/preset')],
  theme: {
    extend: {
      colors: {
        primary: '#2E8FE6',
        secondary: '#87C6FF',
        subtitle: '#64748B',
        thirdBlue: '#03314B',
        subtitle: '#64748B',
        primaryRed: '#FF4D4D',
        secondaryRed: '#F38080',
        thirdRed: '#650000',
        primaryGreen: '#008C38',
        secondaryGreen: '#32BF6B',
        primaryPurple: '#9200F4',
        secondaryPurple: '#7A11C0',
        primaryPink: '#C856BC',
        secondaryPink: '#6D0062',
        blueText: '#03314B'
      },
    },
  },
  plugins: [],
};