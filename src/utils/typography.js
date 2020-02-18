import Typography from 'typography';

const typography = new Typography({
  baseFontSize: '18px',
  baseLineHeight: 1.666,
  headerFontFamily: ['Rubik', 'sans-serif'],
  bodyFontFamily: ['Roboto', 'sans-serif'],
  headerWeight: 500,
  googleFonts: [
    {
      name: 'Rubik',
      styles: ['400', '500'],
    },
    {
      name: 'Roboto',
      styles: ['300', '400', '500', '700'],
    },
  ],
});

export default typography;