import type { Config } from 'tailwindcss';
import { nextui } from '@nextui-org/react';

const config: Config = {
  content: [
    './src/styles/**/*.{html,js}',
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {},
  },
  darkMode: 'class',
  plugins: [
    nextui({
      defaultTheme: 'light',
      themes: {
        light: {
          extend: 'light',
          colors: {
            background: '#FFFFFF',
            primary: {
              DEFAULT: '#F84F05',
              foreground: '#11181C',
            },
            secondary: {
              DEFAULT: '#5E5E5E',
            },
          },
        },
      },
    }),
  ],
};
export default config;
