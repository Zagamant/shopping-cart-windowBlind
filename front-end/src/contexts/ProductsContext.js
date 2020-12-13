import React, { createContext } from 'react';
//import { dummyProducts } from '../services/dummy';
//import ApiService from "../services/api.config";
import * as PropTypes from 'prop-types';
import axios from 'axios';

export const ProductsContext = createContext();

class ProductsContextProvider extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            products: [],
        };
    }

    componentDidMount() {
        //ApiService.init("http://localhost:8080")

        axios.get('http://localhost:8080/api/v1/windowBlinds').then(
            (result) => {
                console.log(result);
                this.setState({
                    products: result.data,
                });
            },
            (error) => {}
        );
    }

    render() {
        let { children } = this.props;
        let { products } = this.state;

        //const [products] = useState(dummyProducts);

        return (
            <ProductsContext.Provider value={{ products }}>
                {children}
            </ProductsContext.Provider>
        );
    }
}

ProductsContextProvider.propTypes = { children: PropTypes.any };

export default ProductsContextProvider;
