import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState = {
  products: [] as string[],
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addProduct(state, action: PayloadAction<string>){
      state.products.push(action.payload);
    },
    removeProduct(state, action: PayloadAction<string>){
      state.products = state.products.filter((val) => val !== action.payload);
    }
  }
});

export const cartActions = cartSlice.actions;