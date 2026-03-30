import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        burgundy: '#800020',
        'burgundy-dark': '#5a0015',
        'burgundy-light': '#a00029',
        gold: '#D4AF37',
        'gold-light': '#e5c158',
        'off-white': '#f5f3f0',
        charcoal: '#2a2a2a',
        'light-gray': '#e8e8e8',
      },
      fontFamily: {
        sans: ['Tajawal', 'sans-serif'],
        serif: ['Amiri', 'serif'],
      },
      spacing: {
        '128': '32rem',
        '144': '36rem',
      },
      borderRadius: {
        xl: '1rem',
        '2xl': '1.5rem',
      },
    },
  },
  plugins: [],
}

export default config
