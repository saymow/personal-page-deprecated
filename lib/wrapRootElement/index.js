import React from "react";
import { ThemeProvider } from 'styled-components';

import { darkTheme } from '../../src/styles/theme';

const WrapRootElement = ({ element }) => {
  return <ThemeProvider theme={darkTheme}>{element}</ThemeProvider>;
};

export default WrapRootElement;
