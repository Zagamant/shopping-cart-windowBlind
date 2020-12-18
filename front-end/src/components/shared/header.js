import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../../contexts/CartContext';
import { CartIcon } from '../icons';
import styles from './header.module.scss';

const Header = () => {
    const { itemCount } = useContext(CartContext);

    return (
        <header className={styles.header}>
            <Link to="/">Витрина</Link>
            <Link to="/about">О нас</Link>
            <Link to="/cart">
                {' '}
                <CartIcon /> Корзина ({itemCount})
            </Link>
        </header>
    );
};

export default Header;
