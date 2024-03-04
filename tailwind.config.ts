import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    './src/layout/**/*.{js,ts,jsx,tsx,mdx}',
    './src/helpers/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  safelist: [
    {
      pattern: /grid-rows-./,
    },
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '1.5rem',
        sm: '2rem',
        lg: '4rem',
        xl: '5rem',
        '2xl': '6rem',
      },
    },
    screens: {
      'sm': '40rem',
      // => @media (min-width: 640px) { ... }

      'md': '48rem',
      // => @media (min-width: 768px) { ... }

      'lg': '64rem',
      // => @media (min-width: 1024px) { ... }

      'xl': '80rem',
      // => @media (min-width: 1280px) { ... }

      '2xl': '87rem',
      // => @media (min-width: 1392px) { ... }

      '3xl': '93.75rem',
      // => @media (min-width: 1500px) { ... }
    },
    extend: {
      colors: {
        'ultramarine': {
          '50': '#f3f4fb',
          '100': '#e7e9f8',
          '200': '#c2c7ed',
          '300': '#9da6e2',
          '400': '#66ADDE',
          '500': '#0077C8',
          '600': '#0a1da4',
          '700': '#081889',
          '800': '#07136d',
          '900': '#CED2F0'
        },
        'vividred': {
          '50': '#ffcccc',
          '100': '#ffaaaa',
          '200': '#ff8888',
          '300': '#ff6666',
          '400': '#ff4444',
          '500': '#FF1801',
          '600': '#e50000',
          '700': '#c30000',
          '800': '#a10000',
          '900': '#800000',
        },
        'whisper': {
          '50': '#fefeff',
          '100': '#fefeff',
          '200': '#fcfcfe',
          '300': '#fafbfd',
          '400': '#f7f7f7',
          '500': '#F3F4FB',
          '600': '#DADEF4',
          '700': '#b6b7bc',
          '800': '#929297',
          '900': '#77787b'
        },
        'carnation': {
          '50': '#fff7f7',
          '100': '#ffefef',
          '200': '#fed6d6',
          '300': '#febebe',
          '400': '#fd8d8d',
          '500': '#fc5c5c',
          '600': '#e35353',
          '700': '#bd4545',
          '800': '#973737',
          '900': '#7b2d2d'
        },
        'concrete': {
          '50': '#ffffff', 
          '100': '#ffffff', 
          '200': '#fcfcfc', 
          '300': '#fafafa', 
          '400': '#f7f7f7', 
          '500': '#f2f2f2', 
          '600': '#dbc5c5', 
          '700': '#b58888', 
          '800': '#915757', 
          '900': '#7F7F7F', 
          '950': '#471515'
        },
        'well-read': {
          '50': '#FCF7F2', 
          '100': '#FAF1E8', 
          '200': '#F0D6C5', 
          '300': '#E67873', 
          '400': '#D47D68', 
          '500': '#BE3A34', 
          '600': '#AD302A', 
          '700': '#8F221D', 
          '800': '#731612', 
          '900': '#570D0A', 
          '950': '#380604'
      }
      },
      backgroundImage: {
        // 'hero-pattern': "url('/img/arrow.svg')",
      },
      fontSize: {
        // 'xxs': ['.825rem', '1.4'], // 10px
        // 'xs': ['.75rem', '1.5'], // 12px
        // 'sm': ['.875rem', '1.25'], // 14px
        // 'lg': ['2.375rem', '1.05'], // 38px
        // 'xxl': ['5rem', '1.25'], // 80px
        // 'xl3': ['6.25rem', '1.25'], // 100px
        // 'xl4': ['7.5rem', '1.25'], // 120px
      },
      maxWidth: {
        '300': '18.75rem',
        '360': '22.5rem',
        '400': '25rem',
        '480': '30rem',
        '600': '37.5rem',
        '720': '45rem',
      },
      minWidth: {
        '36': '7.5rem',
        '40': '2.5rem',
        '300': '18.75rem',
      },
      minHeight: {
        '300': '18.75rem',
      },
      width: {
        '26': '6.25rem'
      },
      height: {
        '26': '6.25rem'
      },
      borderRadius: {
        '4xl': '2.25rem'
      },
      gridTemplateRows: {
        '7': 'repeat(7, minmax(0, 1fr))',
        '8': 'repeat(8, minmax(0, 1fr))',
        '9': 'repeat(9, minmax(0, 1fr))',
        '10': 'repeat(10, minmax(0, 1fr))',
        '11': 'repeat(11, minmax(0, 1fr))',
        '12': 'repeat(12, minmax(0, 1fr))',
        '13': 'repeat(13, minmax(0, 1fr))',
        '14': 'repeat(14, minmax(0, 1fr))',
        '15': 'repeat(15, minmax(0, 1fr))',
        '16': 'repeat(16, minmax(0, 1fr))',
        '17': 'repeat(17, minmax(0, 1fr))',
        '18': 'repeat(18, minmax(0, 1fr))',
      }
    },
  },
  plugins: [
    require('@tailwindcss/typography'), // Add the Typography plugin
    require('@tailwindcss/aspect-ratio')
  ],
};
export default config;
