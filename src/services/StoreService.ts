
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { ICategory, IProduct } from '../types/types';

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
    }),
    getAllCategories: build.query<ICategory[], void>({
      query: () => ({
        url: 'products/categories'
      }),
      providesTags: ['Catalog'],
    }),
    getCategoryProducts: build.query<IProduct[], string>({
      query: (category: string) => ({
        url: `products/category/${category}`
      }),
      providesTags: ['Catalog'],
    }),
  }),
});