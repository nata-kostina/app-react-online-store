import React from 'react';
import { useAppSelector } from '../../../hooks/useAppSelector';
import { cartActions } from '../../../store/slices/cartSlice';
import { useAppDispatch } from '../../../hooks/useAppDispatch';
import CatalogItem from '../catalogItem/CatalogItem';
import Section from '../../../layouts/section/Section';
import { IProduct } from '../../../types/types';
import View from '../../../components/view/View';
import { catalogActions } from '../../../store/slices/catalogSlice';
import { calculateStyleForGridContainer } from './../utils/calculateStyle';
import styles from './style.module.scss'

interface Props {
  products: IProduct[],
}

function CatalogList({ products }: Props) {
  const { perRow } = useAppSelector((state) => state.catalog);
  const dispatch = useAppDispatch();
  const handleAddToCart = (product: string) => {
    dispatch(cartActions.addProduct(product));
  }
  const handleRemoveFromCart = (product: string) => {
    dispatch(cartActions.removeProduct(product));
  }

  const handleChangeView = (value: number) => {
    dispatch(catalogActions.changeView(value));
  }
  const customStyles = calculateStyleForGridContainer(perRow);
  return (
    <Section title='Products'>
      <>
      <div className={styles['catalog-heading']}>
        <View perRow={perRow} handleChangeView={handleChangeView}/>
      </div>
        <ul className={`${styles.list} ${styles['products-list']}`} 
        style={customStyles}
        >
          {products.map((product) => {
            return <CatalogItem product={product} key={product.id} />
          })}
        </ul>
      </>
    </Section>
  );
}

export default CatalogList;