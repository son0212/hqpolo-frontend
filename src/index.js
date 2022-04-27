import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ProductProvider } from './context/ProductContext';
import { UserProvider } from "./context/UserContext"

ReactDOM.render(
  <ProductProvider>
    <UserProvider>
    <React.StrictMode>
      <App />
    </React.StrictMode></UserProvider>
  </ProductProvider>,
  document.getElementById('root')
);

reportWebVitals();
