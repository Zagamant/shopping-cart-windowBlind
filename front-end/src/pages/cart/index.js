import React, { useContext } from 'react';
import Layout from '../../components/Layout';

import CartProducts from './CartProducts';
import { CartContext } from '../../contexts/CartContext';
import { formatNumber } from '../../helpers/utils';
import { Link } from 'react-router-dom';

const Cart = () => {
    const {
        total,
        cartItems,
        itemCount,
        clearCart,
        checkout,
        handleCheckout,
    } = useContext(CartContext);

    return (
        <Layout title="Корзина" description="This is the Cart page">
            <div>
                <div className="text-center mt-5">
                    <h1>Корзина</h1>
                    <p>
                        Тут вы можете доваить или удалить эелементы для заказа.
                    </p>
                </div>

                <div className="row no-gutters justify-content-center">
                    <div className="col-sm-9 p-3">
                        {cartItems.length > 0 ? (
                            <CartProducts />
                        ) : (
                            <div className="p-3 text-center text-muted">
                                Ваша карзина пуста :(
                            </div>
                        )}

                        {checkout && (
                            <div className="p-3 text-center text-success">
                                <p>Заказ оформлен</p>
                                <Link
                                    to="/"
                                    className="btn btn-outline-success btn-sm"
                                >
                                    Продолжить покупки
                                </Link>
                            </div>
                        )}
                    </div>
                    {cartItems.length > 0 && (
                        <div className="col-sm-3 p-3">
                            <div className="card card-body">
                                <p className="mb-1">Всего товаров</p>
                                <h4 className=" mb-3 txt-right">{itemCount}</h4>
                                <p className="mb-1">Итог к оплате</p>
                                <h3 className="m-0 txt-right">
                                    {formatNumber(total)}
                                </h3>
                                <hr className="my-4" />
                                <div className="text-center">
                                    <button
                                        type="button"
                                        className="btn btn-primary mb-2"
                                        onClick={handleCheckout}
                                    >
                                        Оплатить
                                    </button>
                                    <button
                                        type="button"
                                        className="btn btn-outlineprimary btn-sm"
                                        onClick={clearCart}
                                    >
                                        Очистить
                                    </button>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </Layout>
    );
};

export default Cart;
