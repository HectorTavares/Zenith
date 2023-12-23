import { CartItem, Product } from "@/types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: CartItem[] = [];

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    removeItem: (state, action: PayloadAction<CartItem>) => {
      return state.filter((product) => product.id !== action.payload.id);
    },
    addItem: (state, action: PayloadAction<Product>) => {
      const existingProduct = state.find(
        (product) => product.id === action.payload.id
      );

      if (existingProduct) {
        existingProduct.quantity += 1;
      } else {
        const newItemInCart: CartItem = {
          ...action.payload,
          quantity: 1,
        };
        state.push(newItemInCart);
      }
    },
    increaseQuantity: (state, action: PayloadAction<CartItem>) => {
      const product = state.find((p) => p.id === action.payload.id);
      if (product) {
        product.quantity += 1;
      }
    },
    decreaseQuantity: (state, action: PayloadAction<CartItem>) => {
      const product = state.find((p) => p.id === action.payload.id);

      if (product) {
        if (product.quantity <= 1) {
          return state.filter((p) => p.id !== action.payload.id);
        } else {
          product.quantity -= 1;
        }
      }
    },
  },
});

export const { removeItem, addItem, increaseQuantity, decreaseQuantity } =
  cartSlice.actions;
export const cartReducer = cartSlice.reducer;
