// color palette
const color = {
  white: '#fff',
  black: '#000',
  grey: '#e4e4e4',
};

const fontSize = {
  text_xs: '12px',
  text_sm: '14px',
  text_base: '16px',
  text_lg: '18px',
  text_xl: '20px',
  text_2xl: '24px',
  text_3xl: '30px',
  text_4xl: '36px',
  text_5xl: '48px',
  text_6xl: '60px',
  text_7xl: '72px',
};

const shadow = {
  header: 'rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px',
};

const size = {
  mobileS: '320px',
  mobileM: '360px',
  mobileL: '425px',
  tablet: '768px',
  laptop: '1110px',
  laptopL: '1440px',
  desktop: '1920px',
};

const device = {
  mobileS: `(min-width: ${size.mobileS})`,
  mobileM: `(min-width: ${size.mobileM})`,
  mobileL: `(min-width: ${size.mobileL})`,
  tablet: `(min-width: ${size.tablet})`,
  laptop: `(min-width: ${size.laptop})`,
  laptopL: `(min-width: ${size.laptopL})`,
  desktop: `(min-width: ${size.desktop})`,
};

export const theme = {
  color: {
    primary: color.white,
    secondary: color.white,
    tertiary: color.grey,
  },
  fontSize,
  shadow,
  device,
};
