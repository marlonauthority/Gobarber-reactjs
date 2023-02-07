import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    font-size: 62.5%;
  }

  body {
    background: #312E38;
    color: #fff;
    font-family: "Source Sans Pro", sans-serif;
    font-size: 1.6rem;
    -webkit-font-smoothing: antialiased; /** qualidade retina */
    scroll-behavior: smooth; /** scroll suave */
  }
  input, button {
    font-family: 'Roboto Slab', serif;
    font-size: 1.6rem;
  }
  h1, h2, h3, h4, h5, h6, strong {
    font-weight: 500;
  }
  button {
    cursor: pointer;
  }
`;
