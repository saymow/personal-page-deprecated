import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;

    font-family: 'Nunito', sans-serif;
  }

  :root {
    font-size: 62.5%;

    /* CSS Variables to setup */
  }
`;
