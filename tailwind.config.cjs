/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}",
  ],
  theme: {
    extend: {
      colors: {
        primary: 'var(--color-primary)'
      },
      fontFamily: {
        primary: ['Poppins', 'sans-serif'],
        sans: ['Poppins', 'sans-serif'],
        serif: ['Poppins', 'serif']
      },
      zIndex: {
        1: '1',
        2: '2',
        3: '3',
        4: '4',
        5: '5',
      },
    },
  },
  plugins: [],
}