import React from 'react';
import styles from './style.module.scss';
import { IoBagOutline } from 'react-icons/io5';


const Cart = () => {
  return (
    <div className={styles.cart}>
      <a href="#" className={styles.cart__link}>
        <div className={styles.cart__img}> <IoBagOutline /></div>
        <span className={styles.cart__quantity}>0</span>
      </a>
    </div>
  );
};

export default Cart;