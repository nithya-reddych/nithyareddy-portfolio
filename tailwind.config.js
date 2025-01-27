import { DEFAULT } from "@react-three/fiber/dist/declarations/src/core/utils";

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        rose: {
          light: '#ffe4e6',
          DEFAULT: '#ffd1dc',
          dark: '#ffb6c1'
        },
        cyan:{
          light:'#0e7490',
          DEFAULT:'#082f49',
          dark:'#083344',
          bg1:'#301934',
          bg2:'#392a48',
          bg3:'#856088',
          bg4:'#8f9984',
          bg5:'#305e61',
          bg6:'#3b5a2e'

        
        },
        orange:{
          light:'#fb923c',
          DEFAULT:'#ea580c',
          dark:'#f97316',
          fade:'#fdba74'
        },
        brown:{
          DEFAULT:'#9a3412'
        },
        teal:{
          DEFAULT:'#14b8a6'
        },
        cream:{
          DEFAULT:'#ffedd5',
          light:'#fff7ed'
        },
        pink:{
          DEFAULT:'#9d174d',
          dark:'#831843',
          light:'#be185d',
          darker:'#500724',

        },
      },
      fontFamily: {
        spicy: ['Spicy Rice', 'cursive'], 
        vt323: ['VT323', 'monospace'], 
        font3: ['EB Garamond', 'serif'],
      },
    },
  },
  plugins: [],
};