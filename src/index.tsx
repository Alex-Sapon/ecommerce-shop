import React from 'react';

import { App } from 'components/app';
import { ProductProvider } from 'contexts/ProductContext';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from 'styles/global';
import { theme } from 'styles/styles';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <ProductProvider>
    <ThemeProvider theme={theme}>
      <React.StrictMode>
        <Router>
          <App />
          <GlobalStyles />
        </Router>
      </React.StrictMode>
    </ThemeProvider>
  </ProductProvider>
);
