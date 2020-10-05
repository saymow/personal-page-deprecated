import React, { createContext, useContext } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const GlobalContext = createContext({
  pushNotification: (type, message) => null,
});

import { ThemeProvider } from 'styled-components';
import { darkTheme } from '../../src/styles/theme';
import { StyledToastContainer } from './styles';

const WrapRootElement = ({ element }) => {
  function pushNotification(type, message) {
    toast[type](message);
  }

  return (
    <GlobalContext.Provider value={{ pushNotification }}>
      <StyledToastContainer />
      <ThemeProvider theme={darkTheme}>{element}</ThemeProvider>
    </GlobalContext.Provider>
  );
};

export const useGlobalContext = () => {
  const context = useContext(GlobalContext);

  return context;
};

export default WrapRootElement;
