import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  :root {
    --borders: #38444d;
    --texts: #8899a6;
    --postColor: #edecee;
    --highlight: #a277ff;
    --mediumBackground: #110f18;
    --background: #15141b;
    --white: #fff;
    --black: #222;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    font-size: 62.5%;
  }

  body {
    font-family: 'Poppins', sans-serif;
    background-color: #15141b;
    color: #edecee;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
`
