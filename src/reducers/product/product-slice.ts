import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Product } from "@/types";
import { createSlice } from "@reduxjs/toolkit";

// Define a service using a base URL and expected endpoints
export const productApi = createApi({
  reducerPath: "productApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://dummyjson.com/" }),
  endpoints: (builder) => ({
    getProducts: builder.query<Product[], {}>({
      query: () => `products?limit=100`,
      transformResponse: (response: { products: Product[] }) =>
        response.products,
    }),
    getProductById: builder.query<Product, string>({
      query: (id) => `products/${id}`,
      transformResponse: (response: Product) => response,
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetProductsQuery, useGetProductByIdQuery } = productApi;
export const productApiReducer = productApi.reducer;

const initialState: Array<Product> = [];

export const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    setProducts: (state, action) => {
      // Atualiza o estado com os dados da chamada API
      return action.payload;
    },
  },
});

export const { setProducts } = productSlice.actions;
export const productReducer = productSlice.reducer;
