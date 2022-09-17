import React from 'react';
import { useAppSelector } from '../../hooks/useAppSelector';
import { cartActions } from '../../store/slices/cartSlice';
import { useAppDispatch } from '../../hooks/useAppDispatch';
import CatalogList from './CatalogList';
import BasicLayout from '../../layouts/BasicLayout/BasicLayout';

function CatalogPage() {
  const catalog = useAppSelector((state) => state.catalog.products);
  const cart = useAppSelector((state) => state.cart.products);
  const dispatch = useAppDispatch();
  const handleAddToCart = (product: string) => {
    dispatch(cartActions.addProduct(product));
  }

  const handleRemoveFromCart = (product: string) => {
    dispatch(cartActions.removeProduct(product));
  }
  return (
    <BasicLayout>
      <div style={{ display: 'flex' }}>
        <CatalogList />
        <div style={{ border: '2px solid red', width: '50%' }}>
          <h2>Cart</h2>
          <ul>
            {cart.map((product) => {
              return <li style={
                {
                  height: '50px',
                  width: '150px',
                  border: '1px solid black',
                }
              } key={product}>{product}
                <button type="button" onClick={() => handleRemoveFromCart(product)}>Remove from Cart</button></li>
            })}
          </ul>
        </div>
      </div>
    </BasicLayout>
  );
}

export default CatalogPage;