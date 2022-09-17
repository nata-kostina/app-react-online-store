import React, { useState } from 'react';
import { useAppSelector } from '../../hooks/useAppSelector';
import { cartActions } from '../../store/slices/cartSlice';
import { useAppDispatch } from '../../hooks/useAppDispatch';

interface Props {
  product: string,
}

function CatalogItem({ product }: Props) {
  const cart = useAppSelector((state) => state.cart.products);
  const [isInCart, setIsInCart] = useState(cart.includes(product));
  const dispatch = useAppDispatch();
  const handleAddToCart = (product: string) => {
    dispatch(cartActions.addProduct(product));
    setIsInCart(true);
  }
  const handleRemoveFromCart = (product: string) => {
    dispatch(cartActions.removeProduct(product));
    setIsInCart(false);
  }
  return (
    <li style={
      {
        height: '50px',
        width: '150px',
        border: '1px solid black',
      }
    }>{product}
      {isInCart ?
        <button type="button" onClick={() => handleRemoveFromCart(product)}>Remove from Cart</button> :
        <button type="button" onClick={() => handleAddToCart(product)}>Add to Cart</button>}
    </li>
  );
}

export default CatalogItem;