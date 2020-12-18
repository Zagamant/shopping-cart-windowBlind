import React from 'react';
import ReactDOM from 'react-dom';
import Routes from './routes';
import * as serviceWorker from './serviceWorker';

import { HelmetProvider } from 'react-helmet-async';
import ProductsContextProvider from './contexts/ProductsContext';
import CartContextProvider from './contexts/CartContext';

ReactDOM.render(
    <HelmetProvider>
        <ProductsContextProvider>
            <CartContextProvider>
                <Routes />
            </CartContextProvider>
        </ProductsContextProvider>
    </HelmetProvider>,
    document.getElementById('root')
);

serviceWorker.unregister();
