import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
 /* Import both fonts */

  :root {
    --primary-bg: #002f5f;
    --button-bg: #f5a623;
    --text-on-primary: #ffffff;
    --heading-color: #002f5f;
    --body-color: #333333;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Lato', sans-serif;
    background-color: #fff;
    color: var(--body-color);
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  h1, h2, h3, h4, h5, h6, p, span, li, ul {
    font-family: 'Poppins', sans-serif;
    font-weight: 700;
    margin: 0;
  }

  button {
    font-family: inherit;
  }
`;

export default GlobalStyle;
