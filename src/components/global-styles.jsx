import React from 'react';
import { Global, css } from '@emotion/react';

const styles = css`
  @import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,400;0,700;1,100;1,400;1,700&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,400;0,700;1,100;1,400;1,700&display=swap');
  body {
    margin: 0;
    font-family: Lato, -apple-system, BlinkMacSystemFont, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
      monospace;
  }
`;

const mediaQueries = {
  mobile: '@media (min-width: 375px)',
  tablet: '@media (min-width: 768px)',
  desktop: '@media (min-width: 1024px)',
  desktopXL: '@media (min-width: 1280px)',
};

const colors = {
  grey: '#999999',
  black: '#000000',
  white: '#FFFFFF',
  primary: '#051A2D',
  secondary: '#C79F2F',
  chatIcon: '#00E776',
  shades: {
    greys: {
      lighter_5: '#adadad',
      lighter_10: '#c1c1c1',
      lighter_15: '#d6d6d6',
      darker_5: '#7a7a7a',
      darker_10: '#5b5b5b',
      darker_15: '#3d3d3d',
      darker_20: '#1e1e1e',
    },
    primary: {
      lighter_5: '#082744',
      lighter_10: '#0a355b',
      lighter_15: '#0d4272',
      darker_5: '#020d16',
    },
    secondary: {
      lighter_5: '#d1ab3e',
      lighter_10: '#d6b453',
      lighter_15: '#dbbd67',
      darker_5: '#b28f2a',
    },
  },
  tints: {
    primary: {
      lighter_5: '#364756',
      lighter_10: '#697581',
      lighter_15: '#9ba3ab',
      lighter_20: '#cdd1d5',
    },
    secondary: {
      lighter_5: '#d2b258',
      lighter_10: '#ddc582',
      lighter_15: '#e8d8ab',
      lighter_20: '#f3ebd5',
    },
  },
};

const GlobalStyles = () => (
  <Global styles={styles} />
);

export {
  colors,
  mediaQueries,
};
export default GlobalStyles;
