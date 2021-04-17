module.exports = {
  purge: {
    enabled: process.env.NODE_ENV === 'production' ? true : false,
    content: [
      './src/**/*.jsx',
      '**/*.css',
      '**/*.html',
      './index.css'
    ]
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
