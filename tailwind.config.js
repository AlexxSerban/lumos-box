/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        accent: 'var(--accent)',
        'accent-neon-red': 'var(--accent-neon-red)',
        'accent-neon-purple': 'var(--accent-neon-purple)',
        'accent-neon-blue': 'var(--accent-neon-blue)',
        'accent-neon-cyan': 'var(--accent-neon-cyan)',
        'neutral-silver': 'var(--neutral-silver)',
        'neutral-grey': 'var(--neutral-grey)',
        'border-subtle': 'var(--border-subtle)',
      },
      spacing: {
        '128': '8rem',
      },
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
      },
    },
  },
  plugins: [],
}

