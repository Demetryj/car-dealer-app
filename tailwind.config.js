module.exports = {
  content: ['./app/**/*.{js,ts,jsx,tsx,mdx}', './styles/**/*.{css}'],
  theme: {
    extend: {
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
      },
    },
  },
  plugins: [],
};
