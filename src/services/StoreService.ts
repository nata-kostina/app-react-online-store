
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { IProduct } from '../types/types';

export const storeApi = createApi({
  reducerPath: 'store/api',
  baseQuery: fetchBaseQuery({
    baseUrl: "https://fakestoreapi.com/",
  }),
  tagTypes: ['Catalog', 'Cart'],
  endpoints: (build) => ({
    getAllProducts: build.query<IProduct[], number|void>({
      query: (limit = 15) => ({
        url: 'products',
        params: {
          limit,
        }
      }),
      providesTags: ['Catalog'],
    })
  }),
});