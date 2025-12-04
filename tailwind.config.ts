import type {Config} from 'tailwindcss';

export default {
  darkMode: ['class'],
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        body: ['Space Grotesk', 'sans-serif'],
        headline: ['Space Grotesk', 'sans-serif'],
        code: ['monospace'],
      },
      colors: {
        background: '#13183F',
        foreground: '#ffffff',
        card: {
          DEFAULT: '#1E293B',
          foreground: '#ffffff',
        },
        popover: {
          DEFAULT: '#1E293B',
          foreground: '#ffffff',
        },
        primary: {
          DEFAULT: '#4A64FE',
          foreground: '#ffffff',
        },
        secondary: {
          DEFAULT: '#3A4D8F',
          foreground: '#ffffff',
        },
        muted: {
          DEFAULT: '#3A4D8F',
          foreground: '#94A3B8',
        },
        accent: {
          DEFAULT: '#BE5CF6',
          foreground: '#ffffff',
        },
        destructive: {
          DEFAULT: '#EF4444',
          foreground: '#ffffff',
        },
        border: '#3A4D8F',
        input: '#3A4D8F',
        ring: '#4A64FE',
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      keyframes: {
        'accordion-down': {
          from: {
            height: '0',
          },
          to: {
            height: 'var(--radix-accordion-content-height)',
          },
        },
        'accordion-up': {
          from: {
            height: 'var(--radix-accordion-content-height)',
          },
          to: {
            height: '0',
          },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
} satisfies Config;
