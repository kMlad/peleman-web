const colors = require('tailwindcss/');

module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    boxShadow: {
      custom: '0px 0px 10px 0px rgba(0,0,0,0.1)',
      customDropdown: '0px 10px 10px 0px rgba(0,0,0,0.1)',
      customDeep: '-4px 4px 10px 0px rgba(0,0,0,0.1)',
      customMobile: 'rgba(0, 0, 0, 0.25) 0px 0.5px 1px, rgba(0, 0, 0, 0.22) 0px 5px 40px'
    },
    colors: {
      black: '#000000',
      white: '#FFFFFF',
      orange: '#F04E23',
      darkNavy: '#29266D',
      lightNavy: '#5752e5',
      transparent: 'transparent',
      darkGrey: '#2C2933',
      lightGrey: '#E1E1E1',
      pink: '#D73B5F',
      yellow: '#F9AE00',
      grey: '#ADADAD',
      formDarkPink: '#D73B5F',
      formLightPink: '#FF6C8E',
    },
    screens: {
      smallest: '320px',
      small: '330px',
      phoneSmall: '340px',
      xxs: '356px',
      phone: '370px',
      xs: '400px',
      phoneLarge: '450px',
      phoneS: '505px',
      heroBreakOne: '560px',
      sm: '640px',
      heroBreakTwo: '690px',
      md: '736px',
      heroBreakThree: '934px',
      lg: '1024px',
      registerPopup: '1149px',
      heroBreakFour: '1250px',
      xl: '1280px',
      xlSpecial: '1430px',
      '2xl': '1620px',
    },
    // container: {
    //   padding: {
    //     DEFAULT: '1rem',
    //     sm: '2rem',
    //     lg: '4rem',
    //     // xl: '5rem',
    //     // '2xl': '6rem',
    //   },
    // },
    extend: {
      animation: {
        marquee: 'marquee 140s linear infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
      },
    },
    container: {
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        lg: '4rem',
        // xl: '5rem',
        // '2xl': '6rem',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('eslint-plugin-tailwindcss'),
  ],
};
