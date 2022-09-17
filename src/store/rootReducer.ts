import { combineReducers } from "@reduxjs/toolkit";
import {cartSlice} from './slices/cartSlice';
import {catalogSlice} from './slices/catalogSlice';
import { storeApi } from './../services/StoreService';

const rootReducer = combineReducers({
  cart: cartSlice.reducer,
  catalog: catalogSlice.reducer,
  [storeApi.reducerPath]: storeApi.reducer
});

export default rootReducer;