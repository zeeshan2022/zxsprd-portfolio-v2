/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        bg: '#0b1020',
        'bg-2': '#0f1530',
        card: '#121a38',
     accent: 'var(--color-accent)',
     accent2: 'var(--color-accent2)',
        text: '#e6ecff',
        muted: '#9aa6c7',
        border: 'rgba(255,255,255,0.08)',
      },
      fontFamily: {
        sans: ['Segoe UI', 'system-ui', '-apple-system', 'Roboto', 'Helvetica', 'Arial', 'sans-serif'],
        mono: ['Courier New', 'Courier', 'monospace'],
      },
    },
  },
  plugins: [],
}