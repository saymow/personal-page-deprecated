import { createGlobalStyle } from 'styled-components';

import { darkTheme } from '../theme/index.js';

type themeType = typeof darkTheme;

const GlobalStyles = createGlobalStyle<{ theme: themeType }>`
  :root {
    font-size: 62.5%;

    --color-background: ${({ theme }) => theme.background};
    --color-background-secondary: ${({ theme }) => theme.background_secondary};
    --color-text: ${({ theme }) => theme.text};
    --color-text-secondary: ${({ theme }) => theme.text_secondary};
    --color-purple: ${({ theme }) => theme.purple};
    --color-green: ${({ theme }) => theme.green};
    --color-green-secondary: ${({ theme }) => theme.green_secondary};
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;

    font-family: 'Montserrat', sans-serif;
    color: var(--color-text);
  }
`;

export default GlobalStyles;
