/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        // Warm White — main page background
        warm: {
          DEFAULT: '#FCFBF7',
        },
        // Soft Oat — alternate section background
        oat: {
          DEFAULT: '#F4F6F1',
          dark: '#E9ECDE',
        },
        // HappyMe Green (500/DEFAULT) through Deep Green (700)
        green: {
          50: '#EAF7EC',
          100: '#CFEFD6',
          200: '#A3DFB4',
          300: '#74CD8F',
          400: '#3DB863',
          500: '#1FA64A',
          600: '#188B3F',
          700: '#146B34',
          800: '#0F4F27',
          900: '#0A3A1C',
          DEFAULT: '#1FA64A',
        },
        // Tomato Red (500/DEFAULT), Soft Red Tint (50) — used sparingly
        red: {
          50: '#FFF1F0',
          100: '#FFDBD8',
          200: '#FFB8B2',
          300: '#F98F87',
          400: '#F0645C',
          500: '#E53935',
          600: '#C62F2B',
          700: '#A32621',
          DEFAULT: '#E53935',
        },
        charcoal: {
          DEFAULT: '#1F2933',
        },
        muted: {
          DEFAULT: '#667085',
        },
        line: {
          DEFAULT: '#E5E7DA',
        },
      },
      fontFamily: {
        serif: ['"Fraunces"', '"Playfair Display"', 'Georgia', 'serif'],
        sans: ['"Inter"', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
      },
      spacing: {
        18: '4.5rem',
        22: '5.5rem',
        30: '7.5rem',
      },
      borderRadius: {
        xl2: '1.25rem',
        card: '1rem',
        product: '1.5rem',
        pill: '999px',
      },
      boxShadow: {
        soft: '0 2px 10px rgba(31, 41, 51, 0.06)',
        card: '0 4px 20px rgba(31, 41, 51, 0.07)',
        lift: '0 14px 34px rgba(31, 41, 51, 0.12)',
        nav: '0 -2px 16px rgba(31, 41, 51, 0.07)',
      },
      maxWidth: {
        content: '1280px',
      },
      transitionTimingFunction: {
        premium: 'cubic-bezier(0.22, 1, 0.36, 1)',
      },
    },
  },
  plugins: [],
}
