/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}",
  ],
  theme: {
    extend: {
      colors: {
        primary: 'var(--color-primary)',
        primaryHeaderBg: 'var(--primaryHeaderBgclr)',
        primaryHeaderText: 'var(--primaryHeaderTextclr)',
        secondaryHeaderBg: 'var(--secondaryHeaderBgclr)',
        secondaryHeaderText: 'var(--secondaryHeaderTextclr)',
        primaryFooterBg: 'var(--primaryFooterBgClr)',
        primaryFooterText: 'var(--primaryFooterTextClr)',
        colorThemePrimary: 'var(--colorThemePrimary)',
        colorThemePrimaryText: 'var(--colorThemePrimaryText)',
        colorThemeSecondary: 'var(--colorThemeSecondary)',
        colorThemeSecondaryText: 'var(--colorThemeSecondaryText)',
      },
      fontFamily: {
        primary: ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [],
}