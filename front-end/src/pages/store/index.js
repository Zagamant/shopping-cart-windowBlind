import React from 'react';
import Layout from '../../components/Layout';

import ProductsGrid from './ProductsGrid';

class Store extends React.Component {
    render() {
        return (
            <Layout title="Store" description="This is the Store page">
                <div className="text-center mt-5">
                    <h1>Жалюзикон</h1>
                    <p>Добро пожаловть за занавес.</p>
                </div>
                <ProductsGrid />
            </Layout>
        );
    }
}

export default Store;
