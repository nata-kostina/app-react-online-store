import React from 'react';
import { useAppSelector } from '../../hooks/useAppSelector';
import { cartActions } from '../../store/slices/cartSlice';
import { useAppDispatch } from '../../hooks/useAppDispatch';
import CatalogItem from './CatalogItem';

function CatalogList() {
  const catalog = useAppSelector((state) => state.catalog.products);
  const dispatch = useAppDispatch();
  const handleAddToCart = (product: string) => {
    dispatch(cartActions.addProduct(product));
  }
  const handleRemoveFromCart = (product: string) => {
    dispatch(cartActions.removeProduct(product));
  }

  return (
      <div style={{ border: '2px solid red', width: '50%' }}><h2>Catalog</h2>
        <ul>
          {catalog.map((product) => {
            return <CatalogItem product={product} key={product}/>
          })}
        </ul>
      </div>
  );
}

export default CatalogList;