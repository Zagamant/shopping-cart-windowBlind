import React, { useContext } from 'react';
import { CartContext } from '../../contexts/CartContext';
import { formatNumber } from '../../helpers/utils';
import * as PropTypes from 'prop-types';

function ProductItem(props) {
    let { product } = props;
    const { addProduct, cartItems, increase } = useContext(CartContext);

    const isInCart = (product) => {
        return !!cartItems.find((item) => item.id === product.id);
    };

    return (
        <div className="card card-body d-flex flex-column">
            <h2 className="text-left">{product.model}</h2>
            <img
                style={{
                    display: 'block',
                    margin: '0 0 10px',
                    height: '300px',
                    width: '300px',
                    objectFit: 'cover',
                }}
                className="img-fluid"
                src={product.photoLink + '?v=' + product.id}
                alt={product.model}
            />
            <p>{product.description}</p>
            <p>{product.name}</p>
            <h3 className="text-left mt-auto">{formatNumber(product.price)}</h3>
            <div className="text-right">
                {/*<Link to="/" className="btn btn-link btn-sm mr-2">*/}
                {/*    Details*/}
                {/*</Link>*/}

                {isInCart(product) && (
                    <button
                        onClick={() => increase(product)}
                        className="btn btn-outline-primary btn-md"
                    >
                        Добавить еще
                    </button>
                )}

                {!isInCart(product) && (
                    <button
                        onClick={() => addProduct(product)}
                        className="btn btn-primary btn-md"
                    >
                        В корзину
                    </button>
                )}
            </div>
        </div>
    );
}

ProductItem.propTypes = { product: PropTypes.any };

export default ProductItem;
