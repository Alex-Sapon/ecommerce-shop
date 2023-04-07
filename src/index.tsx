import React from 'react';

import { App } from 'components/app';
import { CartProvider } from 'contexts/CartContext';
import { ProductProvider } from 'contexts/ProductContext';
import { SidebarProvider } from 'contexts/SidebarContext';
import ReactDOM from 'react-dom/client';
import { HashRouter as Router } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from 'styles/global';
import { theme } from 'styles/styles';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <Router>
    <ProductProvider>
      <CartProvider>
        <SidebarProvider>
          <ThemeProvider theme={theme}>
            <React.StrictMode>
              <App />
              <GlobalStyles />
            </React.StrictMode>
          </ThemeProvider>
        </SidebarProvider>
      </CartProvider>
    </ProductProvider>
  </Router>
);
