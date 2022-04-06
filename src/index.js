import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { makeServer } from './server';
import App from './App';
import { ProductsProvider } from './context/products-context';
import { CartProvider } from './context/cart-context';
// import { FilteredProvider } from './context/filter-context';

makeServer();
ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <ProductsProvider>
        <CartProvider>
          <App />
        </CartProvider>
      </ProductsProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
