import React from 'react';
import { useAppSelector } from '../../../hooks/useAppSelector';
import styles from './style.module.scss'
import { IProduct } from '../../../types/types';
import { AiFillEye } from 'react-icons/ai';
import { BsBagFill } from 'react-icons/bs';
import { BsHeart } from 'react-icons/bs';

interface Props {
  product: IProduct,
}

function CatalogItem({ product }: Props) {
  const { perRow } = useAppSelector((state) => state.catalog);
  return (
    <li className={`${styles.list__item} ${styles[`per-row_${perRow}`]}`}>
      <div className={styles['product']}>
        <a href="#" className={styles['product__link']}>
          <div className={styles['img-container']}>
            <img src={product.image} alt={`Product ${product.title}`} className={styles['product__img']} />
            <div className={`${styles['overlay']} ${styles['overlay_bottom']}`}>
              <button type="button" className={`${styles.btn} ${styles['btn-shop']}`} title="Quickshop">Quickshop
                <span className={styles.btn__icon}><AiFillEye /></span>
              </button>
              <button type="button" className={`${styles.btn} ${styles['btn-cart']}`} title="Add to Cart">Add to cart
                <span className={styles.btn__icon}><BsBagFill /></span>
              </button>
            </div>
            <div className={`${styles['overlay']} ${styles['overlay_top']}`}>
              <button type="button" className={`${styles.btn} ${styles['btn-wishlist']}`} title="Add to Wishlist">
                <span className={styles.btn__icon}><BsHeart /></span>
              </button>
            </div>
          </div>
          <div className={styles['product__info']}>
            <div className={styles['product__title']}><b>{product.title}</b></div>
            <div className={styles['product__price']}>{product.price} $</div>
          </div>
        </a>
      </div>
    </li>
  );
}

export default CatalogItem;
