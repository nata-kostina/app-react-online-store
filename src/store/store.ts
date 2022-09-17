import {configureStore} from '@reduxjs/toolkit';
import { storeApi } from '../services/StoreService';
import rootReducer from './rootReducer';

export const store = configureStore({
  reducer: rootReducer,  
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(storeApi.middleware),
});

export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;