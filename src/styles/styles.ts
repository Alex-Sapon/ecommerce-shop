const color = {
  primary: '#fff',
  secondary: '#000',
  tertiary: '#9f9f9f',
  quantity: '#ea3b3b',
  plus: '#dc4a4a',
  close: '#f33d3d',
  trash: '#dc4a4a',
  header: '#fff',
  footer: '#282828',
  line: '#e36262',
  detailsPrice: '#d73535',
  spinner: '#9f9f9f',
  about: '#f5e6e0',
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

const fontWeight = {
  thin: 100,
  extraLight: 200,
  light: 300,
  regular: 400,
  medium: 500,
  semiBold: 600,
  bold: 700,
  extraBold: 800,
  black: 900,
};

const lineHeight = {
  leading_none: 1,
  leading_tight: 1.25,
  leading_snug: 1.375,
  leading_normal: 1.5,
  leading_relaxed: 1.625,
  leading_loose: 2,
};

const shadow = {
  header: 'rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px',
  details: 'rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px',
  sidebar: '10px 0px 25px 0px rgba(0,0,0,0.45)',
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
    primary: color.primary,
    secondary: color.secondary,
    tertiary: color.tertiary,
    quantity: color.quantity,
    plus: color.plus,
    close: color.close,
    trash: color.trash,
    header: color.header,
    footer: color.footer,
    line: color.line,
    detailsPrice: color.detailsPrice,
    spinner: color.spinner,
    about: color.about,
  },
  fontSize,
  fontWeight,
  lineHeight,
  shadow,
  device,
};
