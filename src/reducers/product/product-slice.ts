// import { Product } from "@/types";
// import { createSlice } from "@reduxjs/toolkit";

// const initialState: Product[] = [];

// export const productSlice = createSlice({
//   name: "product",
//   initialState,
//   reducers: {
//     put: (state, action) => {
//       state = action.payload;
//     },
//   },
// });

// export const { put } = productSlice.actions;
// export const productReducer = productSlice.reducer;

import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Product } from "@/types";

// Define a service using a base URL and expected endpoints
export const productApi = createApi({
  reducerPath: "productApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://fakestoreapi.com/" }),
  endpoints: (builder) => ({
    getProducts: builder.query<Product[], {}>({
      query: () => `products`,
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetProductsQuery } = productApi;
export const productReducer = productApi.reducer;
