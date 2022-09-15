import { combineReducers } from "@reduxjs/toolkit";
import {cartSlice} from './../slices/cartSlice';
import {catalogSlice} from './../slices/catalogSlice';

const rootReducer = combineReducers({
  cart: cartSlice.reducer,
  catalog: catalogSlice.reducer,
});

export default rootReducer;