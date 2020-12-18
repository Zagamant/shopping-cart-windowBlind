import React, { createContext } from 'react';
import * as PropTypes from 'prop-types';
import ProductApi from '../services/product.api';

export const ProductsContext = createContext();

class ProductsContextProvider extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            products: [],
        };
    }

    async componentDidMount() {
        const API = new ProductApi();

        const result = await API.get();

        this.setState({
            products: result || [],
        });
    }

    render() {
        let { children } = this.props;
        let { products } = this.state;

        return (
            <ProductsContext.Provider value={{ products }}>
                {children}
            </ProductsContext.Provider>
        );
    }
}
ProductsContextProvider.propTypes = { children: PropTypes.any };
export default ProductsContextProvider;
