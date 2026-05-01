import type { Config } from 'tailwindcss'
import defaultTheme from 'tailwindcss/defaultTheme'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          900: '#0A1628',
          800: '#0D1F3C',
          700: '#112850',
          600: '#1A3A6B',
        },
        blue: {
          600: '#1E6FD9',
          500: '#2E7FE8',
          400: '#4A95F0',
        },
        gold: {
          500: '#F59E0B',
          400: '#FBBF24',
          600: '#D97706',
        },
      },
      fontFamily: {
        sans: ['Inter', ...defaultTheme.fontFamily.sans],
      },
      borderRadius: {
        card: '12px',
      },
      boxShadow: {
        card: '0 4px 24px rgba(0,0,0,0.12)',
        'card-hover': '0 8px 40px rgba(30,111,217,0.25)',
      },
    },
  },
  plugins: [],
}

export default config
