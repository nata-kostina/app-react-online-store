import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState = {
  products: ['1', '2', '3', '4'],
}

export const catalogSlice = createSlice({
  name: "catalog",
  initialState,
  reducers: {
    addProduct(state, action: PayloadAction<string>){
      state.products.push(action.payload);
    },
    removeProduct(state, action: PayloadAction<string>){
      state.products = state.products.filter((val) => val !== action.payload)
    }
  }
});

export const catalogActions = catalogSlice.actions;