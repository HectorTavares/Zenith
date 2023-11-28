"use client";
import { Provider, useDispatch } from "react-redux";

import { configureStore } from "@reduxjs/toolkit";
import { productReducer, cartReducer, sidebarReducer } from "@/reducers";
import { productApi } from "./../reducers/product/product-slice";

export const store = configureStore({
  reducer: {
    [productApi.reducerPath]: productReducer,
    cart: cartReducer,
    sidebar: sidebarReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(productApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export function ReduxStoreProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return <Provider store={store}>{children}</Provider>;
}
