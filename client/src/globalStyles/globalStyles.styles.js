import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  body {
    margin: 0;
    font-family: 'Karla', sans-serif;
    -webkit-font-smoothing: subpixel-antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-size: 1rem;
    box-sizing: border-box;
    margin-bottom: 4rem;
    letter-spacing: 0.01rem;
  }

  .Grid {
    display: grid;
    grid-template-columns: 1fr 12fr 1fr;
  }

  .Content {
    grid-column: 2/3;
  }
`